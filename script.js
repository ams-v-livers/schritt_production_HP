/* ============================================================
   TALENTS
============================================================ */

/*
  所属ライバーはここへ追加してください。

  type:
  "V"
  "REAL"

  platforms:
  ["IRIAM"]
  ["Mirrativ"]
  ["TikTok"]
  ["IRIAM", "TikTok"]

  image:
  "./images/talents/xxx.png"

  画像がない場合:
  ""
*/


const TALENTS = [

  {
    id: 1,

    name: "SORA",

    reading: "ソラ",

    type: "V",

    platforms: [
      "IRIAM"
    ],

    image: "",

    colorA: "#ff9700",

    colorB: "#ffbd63",

    description:
      "雑談を中心に活動するVライバー。",

    bio:
      "明るい雑談とリスナーとのコミュニケーションを中心に活動しています。初めて見る方でも入りやすい配信を目指しています。",

    links: {
      IRIAM: "#",
      X: "#"
    }
  },


  {
    id: 2,

    name: "RIN",

    reading: "リン",

    type: "V",

    platforms: [
      "Mirrativ"
    ],

    image: "",

    colorA: "#7867ef",

    colorB: "#b29bff",

    description:
      "ゲーム・雑談を中心に活動するVライバー。",

    bio:
      "ゲーム配信と雑談を中心に活動。好きなゲームをリスナーと一緒に楽しめる配信を目指しています。",

    links: {
      Mirrativ: "#",
      X: "#"
    }
  },


  {
    id: 3,

    name: "MIO",

    reading: "ミオ",

    type: "REAL",

    platforms: [
      "TikTok"
    ],

    image: "",

    colorA: "#ff8964",

    colorB: "#f35a75",

    description:
      "雑談・美容を中心に活動するリアルライバー。",

    bio:
      "TikTok LIVEで雑談や美容、ライフスタイルを中心に活動しています。",

    links: {
      TikTok: "#",
      X: "#"
    }
  },


  {
    id: 4,

    name: "REN",

    reading: "レン",

    type: "REAL",

    platforms: [
      "TikTok"
    ],

    image: "",

    colorA: "#4e90ca",

    colorB: "#1a3b63",

    description:
      "ゲーム・雑談を中心に活動するリアルライバー。",

    bio:
      "ゲーム・雑談・趣味を中心に活動。コミュニケーションを大切にしたライブ配信を行っています。",

    links: {
      TikTok: "#"
    }
  },


  {
    id: 5,

    name: "LUNA",

    reading: "ルナ",

    type: "V",

    platforms: [
      "IRIAM",
      "TikTok"
    ],

    image: "",

    colorA: "#cf72cf",

    colorB: "#6757c9",

    description:
      "IRIAM・TikTokで活動するVライバー。",

    bio:
      "雑談・歌・ショートコンテンツなど、複数のプラットフォームを活用して活動しています。",

    links: {
      IRIAM: "#",
      TikTok: "#",
      X: "#"
    }
  },


  {
    id: 6,

    name: "KAI",

    reading: "カイ",

    type: "V",

    platforms: [
      "Mirrativ",
      "TikTok"
    ],

    image: "",

    colorA: "#58b790",

    colorB: "#184936",

    description:
      "ゲームを中心に活動するVライバー。",

    bio:
      "ゲーム実況と雑談を中心に、MirrativとTikTokを使い分けながら活動しています。",

    links: {
      Mirrativ: "#",
      TikTok: "#"
    }
  }

];



/* ============================================================
   NEWS
============================================================ */

/*
  新しいNEWSは一番上へ追加してください。
*/


const NEWS = [

  {
    id: 1,

    date: "2026.10.01",

    category: "NEWS",

    title:
      "公式サイトをリニューアルしました。",

    url: "#"
  },


  {
    id: 2,

    date: "2026.09.25",

    category: "RECRUIT",

    title:
      "Vライバー・リアルライバーの募集情報を更新しました。",

    url: "#recruit"
  },


  {
    id: 3,

    date: "2026.09.10",

    category: "EVENT",

    title:
      "所属ライバーのイベント情報を更新しました。",

    url: "#"
  },


  {
    id: 4,

    date: "2026.09.01",

    category: "NEWS",

    title:
      "TikTok LIVEでのライバーサポートを強化しました。",

    url: "#"
  },


  {
    id: 5,

    date: "2026.08.20",

    category: "TALENT",

    title:
      "所属ライバー情報を更新しました。",

    url: "#talents"
  },


  {
    id: 6,

    date: "2026.08.05",

    category: "NEWS",

    title:
      "しゅりっとプロダクションからのお知らせ。",

    url: "#"
  }

];



/* ============================================================
   REAL LIVER SAMPLE
============================================================ */

/*
  実在しない架空の人物イメージです。
*/


const REAL_LIVER_SAMPLES = [

  {
    name: "MIO",

    gender: "女性",

    age: "23歳",

    genre: "雑談 / 美容",

    image: "",

    colorA: "#ff8d68",

    colorB: "#ef5b77"
  },


  {
    name: "REN",

    gender: "男性",

    age: "25歳",

    genre: "ゲーム / 雑談",

    image: "",

    colorA: "#4f92ca",

    colorB: "#1a3a61"
  },


  {
    name: "YUNA",

    gender: "女性",

    age: "22歳",

    genre: "歌 / 雑談",

    image: "",

    colorA: "#cf83c5",

    colorB: "#6a407c"
  },


  {
    name: "HARU",

    gender: "男性",

    age: "24歳",

    genre: "趣味 / 雑談",

    image: "",

    colorA: "#60a27c",

    colorB: "#173a2a"
  }

];



/* ============================================================
   TALENT CARD
============================================================ */


function createTalentCard(talent) {

  const imageHTML =
    talent.image

    ? `
      <img
        src="${talent.image}"
        alt="${talent.name}"
        loading="lazy"
      >
    `

    : `
      <div class="talent-placeholder">

        ${talent.name.charAt(0)}

      </div>
    `;


  const platformsHTML =
    talent.platforms

    .map(platform => {

      return `
        <span class="talent-platform">
          ${platform}
        </span>
      `;

    })

    .join("");


  const typeText =
    talent.type === "V"
    ? "VIRTUAL LIVER"
    : "REAL LIVER";


  return `

    <article
      class="talent-card"
      data-talent-id="${talent.id}"
    >

      <div
        class="talent-image"
        style="
          background:
          linear-gradient(
            145deg,
            ${talent.colorA},
            ${talent.colorB}
          );
        "
      >

        ${imageHTML}

        <span class="talent-type-badge">
          ${typeText}
        </span>

      </div>


      <div class="talent-body">

        <h3 class="talent-name">
          ${talent.name}
        </h3>

        <div class="talent-reading">
          ${talent.reading}
        </div>

        <p class="talent-description">

          ${talent.description}

        </p>

        <div class="talent-platforms">

          ${platformsHTML}

        </div>

        <div class="talent-footer">

          <span>
            PROFILE
          </span>

          <span>
            ↗
          </span>

        </div>

      </div>

    </article>

  `;

}



/* ============================================================
   NEWS CARD
============================================================ */


function createNewsCard(news) {

  return `

    <a
      href="${news.url}"
      class="news-card"
    >

      <div class="news-meta">

        <span class="news-date">
          ${news.date}
        </span>

        <span class="news-category">
          ${news.category}
        </span>

      </div>

      <h3>

        ${news.title}

      </h3>

      <span class="news-read">
        READ MORE
      </span>

    </a>

  `;

}



/* ============================================================
   REAL SAMPLE
============================================================ */


function createRealSampleCard(person) {

  const imageHTML =
    person.image

    ? `
      <img
        src="${person.image}"
        alt="${person.name}"
        loading="lazy"
      >
    `

    : `
      <div class="real-sample-person">

        ${person.name.charAt(0)}

      </div>
    `;


  return `

    <article class="real-sample-card">

      <div
        class="real-sample-visual"
        style="
          background:
          linear-gradient(
            145deg,
            ${person.colorA},
            ${person.colorB}
          );
        "
      >

        ${imageHTML}

      </div>

      <div class="real-sample-info">

        <strong>
          ${person.name}
        </strong>

        <span>

          ${person.gender}
          /
          ${person.age}
          /
          ${person.genre}

        </span>

      </div>

    </article>

  `;

}



/* ============================================================
   RENDER
============================================================ */


function renderSiteData() {

  const homeTalents =
    document.getElementById(
      "homeTalents"
    );

  const allTalents =
    document.getElementById(
      "allTalents"
    );

  const homeNews =
    document.getElementById(
      "homeNews"
    );

  const allNews =
    document.getElementById(
      "allNews"
    );

  const realSampleGrid =
    document.getElementById(
      "realSampleGrid"
    );


  if(homeTalents) {

    homeTalents.innerHTML =
      TALENTS

      .slice(0,4)

      .map(createTalentCard)

      .join("");

  }


  if(allTalents) {

    allTalents.innerHTML =
      TALENTS

      .map(createTalentCard)

      .join("");

  }


  if(homeNews) {

    homeNews.innerHTML =
      NEWS

      .slice(0,3)

      .map(createNewsCard)

      .join("");

  }


  if(allNews) {

    allNews.innerHTML =
      NEWS

      .map(createNewsCard)

      .join("");

  }


  if(realSampleGrid) {

    realSampleGrid.innerHTML =
      REAL_LIVER_SAMPLES

      .map(createRealSampleCard)

      .join("");

  }


  bindTalentCards();

}



/* ============================================================
   FILTER
============================================================ */


function filterTalents(filter) {

  let filteredTalents =
    TALENTS;


  if(filter === "V") {

    filteredTalents =
      TALENTS.filter(
        talent =>
        talent.type === "V"
      );

  }

  else if(filter === "REAL") {

    filteredTalents =
      TALENTS.filter(
        talent =>
        talent.type === "REAL"
      );

  }

  else if(filter !== "ALL") {

    filteredTalents =
      TALENTS.filter(
        talent =>
        talent.platforms.includes(filter)
      );

  }


  const container =
    document.getElementById(
      "allTalents"
    );


  if(!container) {

    return;

  }


  container.innerHTML =
    filteredTalents

    .map(createTalentCard)

    .join("");


  bindTalentCards();

}



function setupTalentFilter() {

  const buttons =
    document.querySelectorAll(
      ".filter-button"
    );


  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        buttons.forEach(item => {

          item.classList.remove(
            "active"
          );

        });


        button.classList.add(
          "active"
        );


        filterTalents(
          button.dataset.filter
        );

      }
    );

  });

}



/* ============================================================
   TALENT MODAL
============================================================ */


function bindTalentCards() {

  const cards =
    document.querySelectorAll(
      ".talent-card"
    );


  cards.forEach(card => {

    card.addEventListener(
      "click",
      () => {

        const id =
          Number(
            card.dataset.talentId
          );


        openTalentModal(id);

      }
    );

  });

}



function openTalentModal(id) {

  const talent =
    TALENTS.find(
      item =>
      item.id === id
    );


  if(!talent) {
    return;
  }


  const modal =
    document.getElementById(
      "talentModal"
    );

  const visual =
    document.getElementById(
      "talentModalVisual"
    );

  const initial =
    document.getElementById(
      "talentModalInitial"
    );


  visual.style.background =
    `
      linear-gradient(
        145deg,
        ${talent.colorA},
        ${talent.colorB}
      )
    `;


  if(talent.image) {

    initial.innerHTML =
      `
        <img
          src="${talent.image}"
          alt="${talent.name}"
        >
      `;

  }

  else {

    initial.textContent =
      talent.name.charAt(0);

  }


  document.getElementById(
    "talentModalType"
  ).textContent =
    talent.type === "V"
    ? "VIRTUAL LIVER"
    : "REAL LIVER";


  document.getElementById(
    "talentModalName"
  ).textContent =
    talent.name;


  document.getElementById(
    "talentModalReading"
  ).textContent =
    talent.reading;


  document.getElementById(
    "talentModalPlatforms"
  ).innerHTML =
    talent.platforms

    .map(platform => {

      return `
        <span class="talent-platform">

          ${platform}

        </span>
      `;

    })

    .join("");


  document.getElementById(
    "talentModalBio"
  ).textContent =
    talent.bio;


  document.getElementById(
    "talentModalLinks"
  ).innerHTML =
    Object.entries(
      talent.links
    )

    .map(([name,url]) => {

      return `

        <a
          href="${url}"
          target="_blank"
          rel="noopener noreferrer"
          class="modal-link"
        >

          ${name}
          ↗

        </a>

      `;

    })

    .join("");


  modal.classList.add(
    "active"
  );


  document.body.classList.add(
    "modal-open"
  );

}



function closeTalentModal() {

  document
    .getElementById(
      "talentModal"
    )
    .classList
    .remove(
      "active"
    );


  document.body.classList.remove(
    "modal-open"
  );

}



/* ============================================================
   ROUTING
============================================================ */


const ROUTES = [

  "home",
  "news",
  "talents",
  "recruit",
  "recruit-virtual",
  "recruit-real",
  "about"

];



function getRoute() {

  return (
    window.location.hash
      .replace("#","")
    ||
    "home"
  );

}



function showPage(route) {

  if(
    !ROUTES.includes(route)
  ) {

    route =
      "home";

  }


  document
    .querySelectorAll(
      ".page-view"
    )
    .forEach(page => {

      page.classList.remove(
        "active"
      );

    });


  const target =
    document.getElementById(
      `page-${route}`
    );


  if(target) {

    target.classList.add(
      "active"
    );

  }


  closeMobileMenu();


  window.scrollTo({
    top: 0,
    behavior: "instant"
  });


  setTimeout(
    observeRevealElements,
    40
  );


  setTimeout(
    setupStaggerAnimation,
    60
  );

}



function handleRoute() {

  showPage(
    getRoute()
  );

}



/* ============================================================
   MOBILE MENU
============================================================ */


function setupMobileMenu() {

  const button =
    document.getElementById(
      "mobileMenuButton"
    );

  const nav =
    document.getElementById(
      "globalNav"
    );


  button.addEventListener(
    "click",
    () => {

      const open =
        nav.classList.toggle(
          "open"
        );


      button.setAttribute(
        "aria-expanded",
        open
      );

    }
  );


  nav
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        closeMobileMenu
      );

    });

}



function closeMobileMenu() {

  const nav =
    document.getElementById(
      "globalNav"
    );

  const button =
    document.getElementById(
      "mobileMenuButton"
    );


  nav.classList.remove(
    "open"
  );


  button.setAttribute(
    "aria-expanded",
    "false"
  );

}



/* ============================================================
   HEADER SCROLL
============================================================ */


function setupHeaderScroll() {

  const header =
    document.getElementById(
      "siteHeader"
    );


  const update = () => {

    header.classList.toggle(
      "scrolled",
      window.scrollY > 30
    );

  };


  window.addEventListener(
    "scroll",
    update,
    {
      passive: true
    }
  );


  update();

}



/* ============================================================
   REVEAL
============================================================ */


let revealObserver;



function observeRevealElements() {

  if(revealObserver) {

    revealObserver.disconnect();

  }


  const elements =
    document.querySelectorAll(
      ".page-view.active .reveal"
    );


  revealObserver =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if(
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "revealed"
            );


            revealObserver.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: .12,
        rootMargin:
          "0px 0px -25px 0px"
      }

    );


  elements.forEach(element => {

    revealObserver.observe(
      element
    );

  });

}



/* ============================================================
   STAGGER
============================================================ */


function setupStaggerAnimation() {

  const selectors = [

    ".news-grid",
    ".talent-grid",
    ".platform-grid",
    ".recruit-grid",
    ".real-sample-grid",
    ".flow-grid",
    ".support-grid"

  ];


  selectors.forEach(selector => {

    document
      .querySelectorAll(
        `.page-view.active ${selector}`
      )
      .forEach(group => {

        const children =
          Array.from(
            group.children
          );


        children.forEach(
          (item,index) => {

            item.style.opacity =
              "0";

            item.style.transform =
              "translateY(25px)";

            item.style.transition =
              `
                opacity .6s ease ${index * .07}s,
                transform .6s cubic-bezier(.16,.84,.34,1) ${index * .07}s
              `;

          }
        );


        const observer =
          new IntersectionObserver(

            entries => {

              entries.forEach(entry => {

                if(
                  !entry.isIntersecting
                ) {
                  return;
                }


                children.forEach(item => {

                  item.style.opacity =
                    "1";

                  item.style.transform =
                    "";

                });


                observer.disconnect();

              });

            },

            {
              threshold: .1
            }

          );


        observer.observe(group);

      });

  });

}



/* ============================================================
   HERO PARALLAX
============================================================ */


function setupHeroParallax() {

  const hero =
    document.querySelector(
      ".hero-art"
    );


  if(!hero) {
    return;
  }


  if(
    window.matchMedia(
      "(max-width: 800px)"
    ).matches
  ) {
    return;
  }


  hero.addEventListener(
    "mousemove",
    event => {

      const rect =
        hero.getBoundingClientRect();


      const x =
        (
          event.clientX -
          rect.left
        )
        /
        rect.width
        -
        .5;


      const y =
        (
          event.clientY -
          rect.top
        )
        /
        rect.height
        -
        .5;


      const card =
        hero.querySelector(
          ".hero-art-card"
        );


      const shape =
        hero.querySelector(
          ".hero-main-shape"
        );


      if(card) {

        card.style.translate =
          `${x * 8}px ${y * 8}px`;

      }


      if(shape) {

        shape.style.translate =
          `${x * -7}px ${y * -7}px`;

      }

    }
  );


  hero.addEventListener(
    "mouseleave",
    () => {

      const card =
        hero.querySelector(
          ".hero-art-card"
        );


      const shape =
        hero.querySelector(
          ".hero-main-shape"
        );


      if(card) {

        card.style.translate =
          "";

      }


      if(shape) {

        shape.style.translate =
          "";

      }

    }
  );

}



/* ============================================================
   MODAL EVENTS
============================================================ */


function setupModalEvents() {

  const modal =
    document.getElementById(
      "talentModal"
    );


  const close =
    document.getElementById(
      "talentModalClose"
    );


  close.addEventListener(
    "click",
    closeTalentModal
  );


  modal.addEventListener(
    "click",
    event => {

      if(
        event.target === modal
      ) {

        closeTalentModal();

      }

    }
  );

}



/* ============================================================
   KEYBOARD
============================================================ */


function setupKeyboardEvents() {

  document.addEventListener(
    "keydown",
    event => {

      if(
        event.key === "Escape"
      ) {

        closeTalentModal();

        closeMobileMenu();

      }

    }
  );

}



/* ============================================================
   INIT
============================================================ */


function initializeSite() {

  renderSiteData();

  setupTalentFilter();

  setupMobileMenu();

  setupHeaderScroll();

  setupModalEvents();

  setupKeyboardEvents();

  handleRoute();

  observeRevealElements();

  setupStaggerAnimation();

  setupHeroParallax();

}



/* ============================================================
   EVENTS
============================================================ */


window.addEventListener(
  "hashchange",
  handleRoute
);


document.addEventListener(
  "DOMContentLoaded",
  initializeSite
);
