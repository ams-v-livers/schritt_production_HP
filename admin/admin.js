/* ============================================================
   SCHRITT PRODUCTION ADMIN
============================================================ */

const sbConfig = window.SCHRITT_SUPABASE || {};
const hasSupabaseConfig =
  Boolean(sbConfig.url && sbConfig.anonKey);

const supabaseClient =
  hasSupabaseConfig
    ? window.supabase.createClient(
        sbConfig.url,
        sbConfig.anonKey
      )
    : null;

const state = {
  talents: [],
  news: [],
  events: [],
  topLiver: null
};

function qs(id) {
  return document.getElementById(id);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setPanel(name) {
  document
    .querySelectorAll(".panel")
    .forEach(panel => panel.classList.remove("active"));

  document
    .querySelectorAll(".nav-item")
    .forEach(item => item.classList.remove("active"));

  qs("panel-" + name)?.classList.add("active");
  document
    .querySelector('[data-panel="' + name + '"]')
    ?.classList.add("active");

  const labels = {
    dashboard: "DASHBOARD",
    talents: "LIVER",
    topLiver: "TOP LIVER",
    news: "NEWS",
    officeEvents: "OFFICE EVENT",
    platformEvents: "PF EVENT"
  };

  qs("panelTitle").textContent =
    labels[name] || "ADMIN";
}

function openModal(html) {
  qs("modalBody").innerHTML = html;
  qs("editorModal").classList.remove("hidden");
}

function closeModal() {
  qs("editorModal").classList.add("hidden");
  qs("modalBody").innerHTML = "";
}

async function uploadImage(file, folder) {
  if(!file) return "";

  const ext =
    file.name.split(".").pop() || "png";

  const fileName =
    folder + "/" +
    crypto.randomUUID() +
    "." + ext.toLowerCase();

  const { error } =
    await supabaseClient
      .storage
      .from("site-images")
      .upload(
        fileName,
        file,
        {
          cacheControl: "3600",
          upsert: false
        }
      );

  if(error) {
    throw error;
  }

  const { data } =
    supabaseClient
      .storage
      .from("site-images")
      .getPublicUrl(fileName);

  return data.publicUrl;
}

async function login(email, password) {
  if(!supabaseClient) {
    throw new Error(
      "supabase-config.js にURLとAnon Keyを設定してください。"
    );
  }

  const { error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if(error) throw error;
}

async function logout() {
  if(supabaseClient) {
    await supabaseClient.auth.signOut();
  }
  showLogin();
}

function showLogin() {
  qs("loginView").classList.remove("hidden");
  qs("dashboardView").classList.add("hidden");
}

async function showDashboard() {
  qs("loginView").classList.add("hidden");
  qs("dashboardView").classList.remove("hidden");
  await loadAll();
}

async function loadAll() {
  await Promise.all([
    loadTalents(),
    loadNews(),
    loadEvents(),
    loadTopLiver()
  ]);

  renderDashboard();
}

async function loadTalents() {
  const { data, error } =
    await supabaseClient
      .from("talents")
      .select("*")
      .order("sort_order", {
        ascending: true
      });

  if(error) throw error;

  state.talents = data || [];

  renderTalentList();
  renderTopTalentSelect();
}

async function loadNews() {
  const { data, error } =
    await supabaseClient
      .from("news")
      .select("*")
      .order("published_at", {
        ascending: false
      });

  if(error) throw error;

  state.news = data || [];

  renderNewsList();
}

async function loadEvents() {
  const { data, error } =
    await supabaseClient
      .from("events")
      .select("*")
      .order("start_date", {
        ascending: false
      });

  if(error) throw error;

  state.events = data || [];

  renderEventLists();
}

async function loadTopLiver() {
  const { data, error } =
    await supabaseClient
      .from("top_liver")
      .select("*")
      .order("updated_at", {
        ascending: false
      })
      .limit(1)
      .maybeSingle();

  if(error) throw error;

  state.topLiver = data || null;
  fillTopLiverForm();
}

function renderDashboard() {
  qs("statTalents").textContent =
    state.talents.length;

  qs("statNews").textContent =
    state.news.length;

  qs("statEvents").textContent =
    state.events.length;
}

function renderTalentList() {
  const target = qs("talentList");

  target.innerHTML =
    state.talents.length
      ? state.talents.map(talent => {
          const generation =
            talent.iriam_generation
              ? " / IRIAM " + talent.iriam_generation
              : "";

          const thumb =
            talent.profile_image
              ? '<img src="' +
                escapeHtml(talent.profile_image) +
                '" alt="">'
              : escapeHtml(
                  (talent.name || "?").charAt(0)
                );

          return `
            <article class="content-card">
              <div
                class="content-thumb"
                style="
                  background:
                  linear-gradient(
                    145deg,
                    ${talent.color_a || "#ff9500"},
                    ${talent.color_b || "#ffb34d"}
                  );
                "
              >
                ${thumb}
              </div>

              <div class="content-copy">
                <strong>${escapeHtml(talent.name)}</strong>
                <span>
                  ${escapeHtml(talent.type === "V" ? "VIRTUAL LIVER" : "REAL LIVER")}
                  ${escapeHtml(generation)}
                </span>
              </div>

              <div class="content-actions">
                <button
                  class="secondary-button"
                  data-edit-talent="${talent.id}"
                >
                  EDIT
                </button>
                <button
                  class="danger-button"
                  data-delete-talent="${talent.id}"
                >
                  DELETE
                </button>
              </div>
            </article>
          `;
        }).join("")
      : '<div class="editor-card">まだライバーが登録されていません。</div>';
}

function renderTopTalentSelect() {
  const select = qs("topTalentId");

  select.innerHTML =
    '<option value="">選択してください</option>' +
    state.talents
      .map(
        talent =>
          '<option value="' +
          talent.id +
          '">' +
          escapeHtml(talent.name) +
          '</option>'
      )
      .join("");

  if(state.topLiver?.talent_id) {
    select.value =
      state.topLiver.talent_id;
  }
}

function fillTopLiverForm() {
  const row = state.topLiver;

  if(!row) return;

  qs("topTalentId").value =
    row.talent_id || "";

  qs("topLabel").value =
    row.label || "MONTHLY PICK UP";

  qs("topMessage").value =
    row.message || "";

  qs("topLiveUrl").value =
    row.live_url || "";

  if(row.image_url) {
    qs("topImagePreview").innerHTML =
      '<img src="' +
      escapeHtml(row.image_url) +
      '" alt="">';
  }
}

function renderNewsList() {
  qs("newsList").innerHTML =
    state.news.length
      ? state.news.map(item => `
          <article class="content-card">
            <div class="content-thumb">N</div>
            <div class="content-copy">
              <strong>${escapeHtml(item.title)}</strong>
              <span>
                ${escapeHtml(item.category || "NEWS")}
                / ${escapeHtml(item.published_at || "")}
              </span>
            </div>
            <div class="content-actions">
              <button class="secondary-button" data-edit-news="${item.id}">
                EDIT
              </button>
              <button class="danger-button" data-delete-news="${item.id}">
                DELETE
              </button>
            </div>
          </article>
        `).join("")
      : '<div class="editor-card">まだお知らせがありません。</div>';
}

function renderEventLists() {
  const office =
    state.events.filter(
      event => event.event_type === "office"
    );

  const platform =
    state.events.filter(
      event => event.event_type === "platform"
    );

  qs("officeEventList").innerHTML =
    createEventListHtml(office);

  qs("platformEventList").innerHTML =
    createEventListHtml(platform);
}

function createEventListHtml(items) {
  if(!items.length) {
    return '<div class="editor-card">まだイベントがありません。</div>';
  }

  return items.map(event => `
    <article class="content-card">
      <div class="content-thumb">E</div>
      <div class="content-copy">
        <strong>${escapeHtml(event.title)}</strong>
        <span>
          ${escapeHtml(event.platform || "OFFICE")}
          / ${escapeHtml(event.start_date || "")}
        </span>
      </div>
      <div class="content-actions">
        <button class="secondary-button" data-edit-event="${event.id}">
          EDIT
        </button>
        <button class="danger-button" data-delete-event="${event.id}">
          DELETE
        </button>
      </div>
    </article>
  `).join("");
}

function platformCheckboxes(selected = []) {
  const options = [
    "IRIAM",
    "Mirrativ",
    "TikTok",
    "YouTube",
    "Twitch"
  ];

  return options.map(name => `
    <label class="checkbox-row">
      <input
        type="checkbox"
        name="platforms"
        value="${name}"
        ${selected.includes(name) ? "checked" : ""}
      >
      <span>${name}</span>
    </label>
  `).join("");
}

function openTalentEditor(talent = null) {
  const current =
    talent || {};

  const platforms =
    Array.isArray(current.platforms)
      ? current.platforms
      : [];

  const links =
    current.platform_links || {};

  openModal(`
    <h3 class="editor-title">
      ${talent ? "EDIT LIVER" : "ADD LIVER"}
    </h3>

    <form id="talentEditorForm" class="form-grid two-column">
      <input type="hidden" id="talentId" value="${current.id || ""}">

      <label>
        <span>タレント名</span>
        <input id="talentName" required value="${escapeHtml(current.name || "")}">
      </label>

      <label>
        <span>読み方 / 英字表記</span>
        <input id="talentReading" value="${escapeHtml(current.reading || "")}">
      </label>

      <label>
        <span>誕生日</span>
        <input id="talentBirthday" placeholder="09.21" value="${escapeHtml(current.birthday || "")}">
      </label>

      <label>
        <span>タイプ</span>
        <select id="talentType">
          <option value="V" ${current.type === "V" ? "selected" : ""}>Vライバー</option>
          <option value="REAL" ${current.type === "REAL" ? "selected" : ""}>リアルライバー</option>
        </select>
      </label>

      <label>
        <span>IRIAM 〇期生</span>
        <input
          id="talentIriamGeneration"
          placeholder="例：1期生"
          value="${escapeHtml(current.iriam_generation || "")}"
        >
      </label>

      <label>
        <span>一言（20字以内）</span>
        <input
          id="talentMessage"
          maxlength="20"
          value="${escapeHtml(current.message || "")}"
        >
      </label>

      <label>
        <span>イメージカラー1</span>
        <input id="talentColorA" type="color" value="${current.color_a || "#ff9500"}">
      </label>

      <label>
        <span>イメージカラー2</span>
        <input id="talentColorB" type="color" value="${current.color_b || "#ffb34d"}">
      </label>

      <label class="full">
        <span>プロフィール</span>
        <textarea id="talentBio">${escapeHtml(current.bio || "")}</textarea>
      </label>

      <div class="full inline-fields">
        ${platformCheckboxes(platforms)}
      </div>

      <label>
        <span>X URL</span>
        <input id="talentXUrl" type="url" value="${escapeHtml(current.x_url || "")}">
      </label>

      <label>
        <span>IRIAM URL</span>
        <input id="talentIriamUrl" type="url" value="${escapeHtml(links.IRIAM || "")}">
      </label>

      <label>
        <span>Mirrativ URL</span>
        <input id="talentMirrativUrl" type="url" value="${escapeHtml(links.Mirrativ || "")}">
      </label>

      <label>
        <span>TikTok URL</span>
        <input id="talentTiktokUrl" type="url" value="${escapeHtml(links.TikTok || "")}">
      </label>

      <label>
        <span>YouTube URL</span>
        <input id="talentYoutubeUrl" type="url" value="${escapeHtml(links.YouTube || "")}">
      </label>

      <label>
        <span>Twitch URL</span>
        <input id="talentTwitchUrl" type="url" value="${escapeHtml(links.Twitch || "")}">
      </label>

      <label class="full">
        <span>プロフィール画像</span>
        <input id="talentImage" type="file" accept="image/*">
      </label>

      <label class="checkbox-row full">
        <input id="talentPublished" type="checkbox" ${current.published !== false ? "checked" : ""}>
        <span>公開する</span>
      </label>

      <button class="primary-button full" type="submit">
        SAVE LIVER ✦
      </button>
    </form>
  `);

  qs("talentEditorForm")
    .addEventListener(
      "submit",
      saveTalent
    );
}

async function saveTalent(event) {
  event.preventDefault();

  const id =
    qs("talentId").value;

  const checkedPlatforms =
    Array.from(
      document.querySelectorAll(
        'input[name="platforms"]:checked'
      )
    ).map(input => input.value);

  const links = {
    IRIAM: qs("talentIriamUrl").value.trim(),
    Mirrativ: qs("talentMirrativUrl").value.trim(),
    TikTok: qs("talentTiktokUrl").value.trim(),
    YouTube: qs("talentYoutubeUrl").value.trim(),
    Twitch: qs("talentTwitchUrl").value.trim()
  };

  const file =
    qs("talentImage").files[0];

  let profileImage =
    id
      ? state.talents.find(
          item => String(item.id) === String(id)
        )?.profile_image || ""
      : "";

  if(file) {
    profileImage =
      await uploadImage(
        file,
        "talents"
      );
  }

  const payload = {
    name: qs("talentName").value.trim(),
    reading: qs("talentReading").value.trim(),
    birthday: qs("talentBirthday").value.trim(),
    type: qs("talentType").value,
    iriam_generation:
      checkedPlatforms.includes("IRIAM")
        ? qs("talentIriamGeneration").value.trim()
        : "",
    message: qs("talentMessage").value.trim(),
    bio: qs("talentBio").value.trim(),
    platforms: checkedPlatforms,
    platform_links: links,
    x_url: qs("talentXUrl").value.trim(),
    profile_image: profileImage,
    color_a: qs("talentColorA").value,
    color_b: qs("talentColorB").value,
    published: qs("talentPublished").checked
  };

  let result;

  if(id) {
    result =
      await supabaseClient
        .from("talents")
        .update(payload)
        .eq("id", id);
  } else {
    result =
      await supabaseClient
        .from("talents")
        .insert(payload);
  }

  if(result.error) {
    alert(result.error.message);
    return;
  }

  closeModal();
  await loadTalents();
  renderDashboard();
}

function openNewsEditor(item = null) {
  const current = item || {};

  openModal(`
    <h3 class="editor-title">
      ${item ? "EDIT NEWS" : "ADD NEWS"}
    </h3>

    <form id="newsEditorForm" class="form-grid">
      <input type="hidden" id="newsId" value="${current.id || ""}">

      <label>
        <span>タイトル</span>
        <input id="newsTitle" required value="${escapeHtml(current.title || "")}">
      </label>

      <label>
        <span>カテゴリ</span>
        <input id="newsCategory" value="${escapeHtml(current.category || "NEWS")}">
      </label>

      <label>
        <span>本文</span>
        <textarea id="newsBody">${escapeHtml(current.body || "")}</textarea>
      </label>

      <label>
        <span>詳細URL</span>
        <input id="newsUrl" type="url" value="${escapeHtml(current.url || "")}">
      </label>

      <label>
        <span>公開日</span>
        <input id="newsPublishedAt" type="date" value="${escapeHtml(current.published_at || "")}">
      </label>

      <label>
        <span>画像</span>
        <input id="newsImage" type="file" accept="image/*">
      </label>

      <label class="checkbox-row">
        <input id="newsPublished" type="checkbox" ${current.published !== false ? "checked" : ""}>
        <span>公開する</span>
      </label>

      <button class="primary-button" type="submit">SAVE NEWS ✦</button>
    </form>
  `);

  qs("newsEditorForm")
    .addEventListener(
      "submit",
      saveNews
    );
}

async function saveNews(event) {
  event.preventDefault();

  const id =
    qs("newsId").value;

  const file =
    qs("newsImage").files[0];

  let imageUrl =
    id
      ? state.news.find(
          item => String(item.id) === String(id)
        )?.image_url || ""
      : "";

  if(file) {
    imageUrl =
      await uploadImage(
        file,
        "news"
      );
  }

  const payload = {
    title: qs("newsTitle").value.trim(),
    category: qs("newsCategory").value.trim(),
    body: qs("newsBody").value.trim(),
    url: qs("newsUrl").value.trim(),
    published_at: qs("newsPublishedAt").value || null,
    image_url: imageUrl,
    published: qs("newsPublished").checked
  };

  const result =
    id
      ? await supabaseClient
          .from("news")
          .update(payload)
          .eq("id", id)
      : await supabaseClient
          .from("news")
          .insert(payload);

  if(result.error) {
    alert(result.error.message);
    return;
  }

  closeModal();
  await loadNews();
  renderDashboard();
}

function openEventEditor(type, item = null) {
  const current = item || {};
  const eventType =
    current.event_type || type;

  openModal(`
    <h3 class="editor-title">
      ${item ? "EDIT EVENT" : "ADD EVENT"}
    </h3>

    <form id="eventEditorForm" class="form-grid two-column">
      <input type="hidden" id="eventId" value="${current.id || ""}">
      <input type="hidden" id="eventType" value="${eventType}">

      <label class="full">
        <span>イベント名</span>
        <input id="eventTitle" required value="${escapeHtml(current.title || "")}">
      </label>

      <label>
        <span>プラットフォーム</span>
        <select id="eventPlatform">
          <option value="">事務所イベント</option>
          <option value="IRIAM" ${current.platform === "IRIAM" ? "selected" : ""}>IRIAM</option>
          <option value="Mirrativ" ${current.platform === "Mirrativ" ? "selected" : ""}>Mirrativ</option>
          <option value="TikTok" ${current.platform === "TikTok" ? "selected" : ""}>TikTok</option>
        </select>
      </label>

      <label>
        <span>ステータス</span>
        <select id="eventStatus">
          <option value="開催予定" ${current.status === "開催予定" ? "selected" : ""}>開催予定</option>
          <option value="開催中" ${current.status === "開催中" ? "selected" : ""}>開催中</option>
          <option value="終了" ${current.status === "終了" ? "selected" : ""}>終了</option>
        </select>
      </label>

      <label>
        <span>開始日</span>
        <input id="eventStartDate" type="date" value="${escapeHtml(current.start_date || "")}">
      </label>

      <label>
        <span>終了日</span>
        <input id="eventEndDate" type="date" value="${escapeHtml(current.end_date || "")}">
      </label>

      <label class="full">
        <span>説明</span>
        <textarea id="eventDescription">${escapeHtml(current.description || "")}</textarea>
      </label>

      <label class="full">
        <span>詳細URL</span>
        <input id="eventUrl" type="url" value="${escapeHtml(current.url || "")}">
      </label>

      <label class="full">
        <span>イベント画像</span>
        <input id="eventImage" type="file" accept="image/*">
      </label>

      <label class="checkbox-row full">
        <input id="eventPublished" type="checkbox" ${current.published !== false ? "checked" : ""}>
        <span>公開する</span>
      </label>

      <button class="primary-button full" type="submit">SAVE EVENT ✦</button>
    </form>
  `);

  qs("eventEditorForm")
    .addEventListener(
      "submit",
      saveEvent
    );
}

async function saveEvent(event) {
  event.preventDefault();

  const id =
    qs("eventId").value;

  const file =
    qs("eventImage").files[0];

  let imageUrl =
    id
      ? state.events.find(
          item => String(item.id) === String(id)
        )?.image_url || ""
      : "";

  if(file) {
    imageUrl =
      await uploadImage(
        file,
        "events"
      );
  }

  const payload = {
    event_type: qs("eventType").value,
    title: qs("eventTitle").value.trim(),
    platform: qs("eventPlatform").value,
    status: qs("eventStatus").value,
    start_date: qs("eventStartDate").value || null,
    end_date: qs("eventEndDate").value || null,
    description: qs("eventDescription").value.trim(),
    url: qs("eventUrl").value.trim(),
    image_url: imageUrl,
    published: qs("eventPublished").checked
  };

  const result =
    id
      ? await supabaseClient
          .from("events")
          .update(payload)
          .eq("id", id)
      : await supabaseClient
          .from("events")
          .insert(payload);

  if(result.error) {
    alert(result.error.message);
    return;
  }

  closeModal();
  await loadEvents();
  renderDashboard();
}

async function saveTopLiver(event) {
  event.preventDefault();

  const file =
    qs("topImage").files[0];

  let imageUrl =
    state.topLiver?.image_url || "";

  if(file) {
    imageUrl =
      await uploadImage(
        file,
        "top"
      );
  }

  const payload = {
    talent_id:
      qs("topTalentId").value || null,
    label:
      qs("topLabel").value.trim(),
    message:
      qs("topMessage").value.trim(),
    live_url:
      qs("topLiveUrl").value.trim(),
    image_url:
      imageUrl
  };

  const result =
    state.topLiver?.id
      ? await supabaseClient
          .from("top_liver")
          .update(payload)
          .eq("id", state.topLiver.id)
      : await supabaseClient
          .from("top_liver")
          .insert(payload);

  if(result.error) {
    alert(result.error.message);
    return;
  }

  await loadTopLiver();
  alert("TOPライバーを保存しました。");
}

async function deleteRow(table, id) {
  if(!confirm("削除しますか？")) return;

  const { error } =
    await supabaseClient
      .from(table)
      .delete()
      .eq("id", id);

  if(error) {
    alert(error.message);
    return;
  }

  await loadAll();
}

function bindUi() {
  document
    .querySelectorAll(".nav-item")
    .forEach(button => {
      button.addEventListener(
        "click",
        () => setPanel(button.dataset.panel)
      );
    });

  qs("modalClose")
    .addEventListener(
      "click",
      closeModal
    );

  qs("editorModal")
    .addEventListener(
      "click",
      event => {
        if(event.target === qs("editorModal")) {
          closeModal();
        }
      }
    );

  qs("newTalentButton")
    .addEventListener(
      "click",
      () => openTalentEditor()
    );

  document
    .querySelectorAll("[data-create-post='news']")
    .forEach(button => {
      button.addEventListener(
        "click",
        () => openNewsEditor()
      );
    });

  document
    .querySelectorAll("[data-create-event]")
    .forEach(button => {
      button.addEventListener(
        "click",
        () =>
          openEventEditor(
            button.dataset.createEvent
          )
      );
    });

  qs("topLiverForm")
    .addEventListener(
      "submit",
      saveTopLiver
    );

  qs("logoutButton")
    .addEventListener(
      "click",
      logout
    );

  qs("loginForm")
    .addEventListener(
      "submit",
      async event => {
        event.preventDefault();

        const message =
          qs("loginMessage");

        message.textContent =
          "ログインしています...";

        try {
          await login(
            qs("loginEmail").value.trim(),
            qs("loginPassword").value
          );

          message.textContent = "";
          await showDashboard();

        } catch(error) {
          message.textContent =
            error.message;
        }
      }
    );

  document.addEventListener(
    "click",
    event => {
      const editTalent =
        event.target.closest(
          "[data-edit-talent]"
        );

      const deleteTalent =
        event.target.closest(
          "[data-delete-talent]"
        );

      const editNews =
        event.target.closest(
          "[data-edit-news]"
        );

      const deleteNews =
        event.target.closest(
          "[data-delete-news]"
        );

      const editEvent =
        event.target.closest(
          "[data-edit-event]"
        );

      const deleteEvent =
        event.target.closest(
          "[data-delete-event]"
        );

      if(editTalent) {
        const talent =
          state.talents.find(
            item =>
              String(item.id) ===
              String(editTalent.dataset.editTalent)
          );

        if(talent) {
          openTalentEditor(talent);
        }
      }

      if(deleteTalent) {
        deleteRow(
          "talents",
          deleteTalent.dataset.deleteTalent
        );
      }

      if(editNews) {
        const item =
          state.news.find(
            row =>
              String(row.id) ===
              String(editNews.dataset.editNews)
          );

        if(item) {
          openNewsEditor(item);
        }
      }

      if(deleteNews) {
        deleteRow(
          "news",
          deleteNews.dataset.deleteNews
        );
      }

      if(editEvent) {
        const item =
          state.events.find(
            row =>
              String(row.id) ===
              String(editEvent.dataset.editEvent)
          );

        if(item) {
          openEventEditor(
            item.event_type,
            item
          );
        }
      }

      if(deleteEvent) {
        deleteRow(
          "events",
          deleteEvent.dataset.deleteEvent
        );
      }
    }
  );
}

async function initialize() {
  bindUi();

  if(!supabaseClient) {
    qs("loginMessage").textContent =
      "Supabase未設定です。supabase-config.js を設定してください。";
    return;
  }

  const {
    data: { session }
  } =
    await supabaseClient.auth.getSession();

  if(session) {
    await showDashboard();
  } else {
    showLogin();
  }

  supabaseClient.auth.onAuthStateChange(
    (_event, session) => {
      if(!session) {
        showLogin();
      }
    }
  );
}

document.addEventListener(
  "DOMContentLoaded",
  initialize
);
