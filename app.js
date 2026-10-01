/* ============================================================
   HELPERS
============================================================ */

function getTalent(id) {

  return TALENTS.find(
    talent =>
    talent.id === id
  );

}


function formatDateParts(date) {

  const parts =
    date.split(".");


  return {
    year:
      parts[0] || "",

    month:
      parts[1] || "",

    day:
      parts[2] || ""
  };

}



/* ============================================================
   CONFIG
============================================================ */

function applyConfig() {

  document
    .querySelectorAll(
      "[data-site-name]"
    )
    .forEach(element => {

      element.textContent =
        SITE_CONFIG.siteName;

    });


  document
    .querySelectorAll(
      ".external-link"
    )
    .forEach(link => {

      const key =
        link.dataset.link;


      const url =
        SITE_CONFIG.links[key];


      if(url) {

        link.href =
          url;

      }


      if(
        url &&
        !url.startsWith("#")
      ) {

        link.target =
          "_blank";

        link.rel =
          "noopener noreferrer";

      }

    });

}



/* ============================================================
   TALENT CARD
============================================================ */

function createTalentCard(talent) {

  const image = talent.image

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


  const platforms =
    talent.platforms

      .map(
        item => `
          <span class="talent-platform">
            ${item}
          </span>
        `
      )

      .join("");


  return `

    <article
      class="talent-card"
      data-talent-id="${talent.id}"
    >

      <div
        class="talent-visual"
        style="
          background:
          linear-gradient(
            145deg,
            ${talent.colorA},
            ${talent.colorB}
          );
        "
      >

        ${image}

        <span class="talent-type">

          ${
            talent.type === "V"
            ? "VIRTUAL LIVER"
            : "REAL LIVER"
          }

        </span>

      </div>


      <div class="talent-body">

        <h3>
          ${talent.name}
        </h3>

        <small>
          ${talent.reading}
        </small>

        <p>

          ${talent.shortDescription}

        </p>

        <div class="talent-platform-list">

          ${platforms}

        </div>

        <div class="talent-footer">

          PROFILE

          <span>
            ↗
          </span>

        </div>

      </div>

    </article>

  `;

}



/* ============================================================
   NEWS
============================================================ */

function createNewsCard(news) {

  return `

    <a
      href="${news.url}"
      class="news-card"
    >

      <div class="news-meta">

        <span>
          ${news.date}
        </span>

        <strong>
          ${news.category}
        </strong>

      </div>

      <h3>
        ${news.title}
      </h3>

      <small>
        READ MORE
      </small>

    </a>

  `;

}



/* ============================================================
   PICKUP
============================================================ */

function renderPickup() {

  const talent =
    getTalent(
      PICKUP.talentId
    );


  const target =
    document.getElementById(
      "pickupCreator"
    );


  const period =
    document.getElementById(
      "pickupPeriod"
    );


  if(
    !target ||
    !talent
  ) {

    return;

  }


  period.textContent =
    PICKUP.period;


  const image =
    talent.image

    ? `
      <img
        src="${talent.image}"
        alt="${talent.name}"
      >
    `

    : `
      <div class="pickup-placeholder">

        ${talent.name.charAt(0)}

      </div>
    `;


  target.innerHTML = `

    <div
      class="pickup-visual"
      style="
        background:
        linear-gradient(
          145deg,
          ${talent.colorA},
          ${talent.colorB}
        );
      "
    >

      ${image}

      <span class="pickup-star">
        ✦
      </span>

      <span class="pickup-note">
        ♪
      </span>

    </div>


    <div class="pickup-content">

      <span class="pickup-label">

        ${PICKUP.label}

      </span>

      <h3>

        ${talent.name}

      </h3>

      <small>

        ${talent.reading}

      </small>

      <p>

        ${PICKUP.description}

      </p>

      <div class="talent-platform-list">

        ${
          talent.platforms

            .map(
              p => `
                <span class="talent-platform">
                  ${p}
                </span>
              `
            )

            .join("")
        }

      </div>

      <button
        class="button orange-button pickup-profile-button"
        data-talent-id="${talent.id}"
      >

        PROFILE

        <span>
          ↗
        </span>

      </button>

    </div>

  `;


  target
    .querySelector(
      ".pickup-profile-button"
    )
    .addEventListener(
      "click",
      () => {

        openTalentModal(
          talent.id
        );

      }
    );

}



/* ============================================================
   EVENT
============================================================ */

function createEventCard(event) {

  const date =
    formatDateParts(
      event.date
    );


  return `

    <article class="event-card">

      <div class="event-date">

        <strong>
          ${date.day}
        </strong>

        <span>
          ${date.month}
        </span>

      </div>

      <div class="event-info">

        <div class="event-meta">

          <span class="event-platform">
            ${event.platform}
          </span>

          <span class="event-status">
            ${event.status}
          </span>

        </div>

        <h3>
          ${event.title}
        </h3>

        <p>
          ${event.description}
        </p>

        <a
          href="${event.url}"
        >
          MORE ↗
        </a>

      </div>

    </article>

  `;

}



/* ============================================================
   INTERVIEW
============================================================ */

function createInterviewCard(interview) {

  const talent =
    getTalent(
      interview.talentId
    );


  if(!talent) {

    return "";

  }


  const visual =
    interview.thumbnail ||
    talent.image;


  const image =
    visual

    ? `
      <img
        src="${visual}"
        alt="${talent.name}"
      >
    `

    : `
      <div class="interview-placeholder">

        ${talent.name.charAt(0)}

      </div>
    `;


  return `

    <article
      class="interview-card"
      data-interview-id="${interview.id}"
    >

      <div
        class="interview-visual"
        style="
          background:
          linear-gradient(
            145deg,
            ${talent.colorA},
            ${talent.colorB}
          );
        "
      >

        ${image}

        <span>
          INTERVIEW
        </span>

      </div>

      <div class="interview-body">

        <small>

          ${talent.name}

        </small>

        <h3>

          ${interview.catchCopy}

        </h3>

        <p>

          ${interview.title}

        </p>

        <strong>

          READ INTERVIEW ↗

        </strong>

      </div>

    </article>

  `;

}



/* ============================================================
   JOURNAL
============================================================ */

function createJournalCard(article) {

  return `

    <a
      href="${article.url}"
      class="journal-card"
      target="_blank"
      rel="noopener noreferrer"
    >

      <div>

        <span>
          ${article.category}
        </span>

        <small>
          ${article.date}
        </small>

      </div>

      <h3>

        ${article.title}

      </h3>

      <p>

        ${article.description}

      </p>

      <strong>

        READ NOTE ↗

      </strong>

    </a>

  `;

}



/* ============================================================
   FAQ
============================================================ */

function createFaqItem(item,index) {

  return `

    <article class="faq-item">

      <button
        class="faq-question"
        aria-expanded="false"
      >

        <span class="faq-number">

          ${String(index + 1).padStart(2,"0")}

        </span>

        <strong>

          ${item.question}

        </strong>

        <span class="faq-icon">
          ＋
        </span>

      </button>

      <div class="faq-answer">

        <p>

          ${item.answer}

        </p>

      </div>

    </article>

  `;

}



/* ============================================================
   REAL SAMPLE
============================================================ */

function createRealSample(person) {

  const image =
    person.image

    ? `
      <img
        src="${person.image}"
        alt="${person.name}"
      >
    `

    : `
      <div class="real-placeholder">

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

        ${image}

      </div>

      <div>

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

function renderAll() {

  document.getElementById(
    "homeNews"
  ).innerHTML =

    NEWS

      .slice(
        0,
        SITE_CONFIG.homeDisplay.news
      )

      .map(
        createNewsCard
      )

      .join("");


  document.getElementById(
    "allNews"
  ).innerHTML =

    NEWS

      .map(
        createNewsCard
      )

      .join("");


  document.getElementById(
    "homeTalents"
  ).innerHTML =

    TALENTS

      .slice(
        0,
        SITE_CONFIG.homeDisplay.talents
      )

      .map(
        createTalentCard
      )

      .join("");


  document.getElementById(
    "allTalents"
  ).innerHTML =

    TALENTS

      .map(
        createTalentCard
      )

      .join("");


  document.getElementById(
    "homeEvents"
  ).innerHTML =

    EVENTS

      .slice(
        0,
        SITE_CONFIG.homeDisplay.events
      )

      .map(
        createEventCard
      )

      .join("");


  document.getElementById(
    "allEvents"
  ).innerHTML =

    EVENTS

      .map(
        createEventCard
      )

      .join("");


  document.getElementById(
    "homeInterviews"
  ).innerHTML =

    INTERVIEWS

      .slice(
        0,
        SITE_CONFIG.homeDisplay.interviews
      )

      .map(
        createInterviewCard
      )

      .join("");


  document.getElementById(
    "allInterviews"
  ).innerHTML =

    INTERVIEWS

      .map(
        createInterviewCard
      )

      .join("");


  document.getElementById(
    "journalGrid"
  ).innerHTML =

    JOURNAL_ARTICLES

      .slice(
        0,
        SITE_CONFIG.homeDisplay.journals
      )

      .map(
        createJournalCard
      )

      .join("");


  document.getElementById(
    "faqList"
  ).innerHTML =

    FAQ

      .map(
        createFaqItem
      )

      .join("");


  document.getElementById(
    "realSampleGrid"
  ).innerHTML =

    REAL_LIVER_SAMPLES

      .map(
        createRealSample
      )

      .join("");


  renderPickup();

  bindTalentCards();

  bindInterviewCards();

  setupFaq();

}



/* ============================================================
   TALENT FILTER
============================================================ */

function setupTalentFilter() {

  document
    .querySelectorAll(
      "[data-filter]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              "[data-filter]"
            )
            .forEach(item => {

              item.classList.remove(
                "active"
              );

            });


          button.classList.add(
            "active"
          );


          const filter =
            button.dataset.filter;


          let data =
            TALENTS;


          if(filter === "V") {

            data =
              TALENTS.filter(
                talent =>
                talent.type === "V"
              );

          }

          else if(
            filter === "REAL"
          ) {

            data =
              TALENTS.filter(
                talent =>
                talent.type === "REAL"
              );

          }

          else if(
            filter !== "ALL"
          ) {

            data =
              TALENTS.filter(
                talent =>
                talent.platforms.includes(
                  filter
                )
              );

          }


          document.getElementById(
            "allTalents"
          ).innerHTML =

            data

              .map(
                createTalentCard
              )

              .join("");


          bindTalentCards();

        }
      );

    });

}



/* ============================================================
   EVENT FILTER
============================================================ */

function setupEventFilter() {

  document
    .querySelectorAll(
      "[data-event-filter]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              "[data-event-filter]"
            )
            .forEach(item => {

              item.classList.remove(
                "active"
              );

            });


          button.classList.add(
            "active"
          );


          const filter =
            button.dataset.eventFilter;


          const data =
            filter === "ALL"

            ? EVENTS

            : EVENTS.filter(
                event =>
                event.platform === filter
              );


          document.getElementById(
            "allEvents"
          ).innerHTML =

            data

              .map(
                createEventCard
              )

              .join("");

        }
      );

    });

}



/* ============================================================
   TALENT MODAL
============================================================ */

function bindTalentCards() {

  document
    .querySelectorAll(
      ".talent-card"
    )
    .forEach(card => {

      card.addEventListener(
        "click",
        () => {

          openTalentModal(
            Number(
              card.dataset.talentId
            )
          );

        }
      );

    });

}



function openTalentModal(id) {

  const talent =
    getTalent(id);


  if(!talent) {

    return;

  }


  const visual =
    document.getElementById(
      "talentModalVisual"
    );


  visual.style.background =
    `
      linear-gradient(
        145deg,
        ${talent.colorA},
        ${talent.colorB}
      )
    `;


  document.getElementById(
    "talentModalInitial"
  ).innerHTML =

    talent.image

    ? `
      <img
        src="${talent.image}"
        alt="${talent.name}"
      >
    `

    : talent.name.charAt(0);


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

      .map(
        p => `
          <span>
            ${p}
          </span>
        `
      )

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

      .map(
        ([name,url]) => `
          <a
            href="${url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${name} ↗
          </a>
        `
      )

      .join("");


  document
    .getElementById(
      "talentModal"
    )
    .classList.add(
      "active"
    );


  document.body.classList.add(
    "modal-open"
  );

}



/* ============================================================
   INTERVIEW MODAL
============================================================ */

function bindInterviewCards() {

  document
    .querySelectorAll(
      ".interview-card"
    )
    .forEach(card => {

      card.addEventListener(
        "click",
        () => {

          openInterview(
            Number(
              card.dataset.interviewId
            )
          );

        }
      );

    });

}



function openInterview(id) {

  const interview =
    INTERVIEWS.find(
      item =>
      item.id === id
    );


  if(!interview) {

    return;

  }


  const talent =
    getTalent(
      interview.talentId
    );


  if(!talent) {

    return;

  }


  const questions =

    interview.questions

      .map(
        item => `
          <article class="interview-question">

            <small>
              Q.
            </small>

            <h3>
              ${item.question}
            </h3>

            <p>
              ${item.answer}
            </p>

          </article>
        `
      )

      .join("");


  document.getElementById(
    "interviewModalContent"
  ).innerHTML = `

    <div class="interview-modal-heading">

      <small>
        CREATOR INTERVIEW
      </small>

      <h2>

        ${talent.name}

      </h2>

      <p>

        ${interview.title}

      </p>

    </div>

    ${questions}

  `;


  document
    .getElementById(
      "interviewModal"
    )
    .classList.add(
      "active"
    );


  document.body.classList.add(
    "modal-open"
  );

}



/* ============================================================
   FAQ
============================================================ */

function setupFaq() {

  document
    .querySelectorAll(
      ".faq-question"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const item =
            button.closest(
              ".faq-item"
            );


          const open =
            item.classList.toggle(
              "open"
            );


          button.setAttribute(
            "aria-expanded",
            open
          );


          button
            .querySelector(
              ".faq-icon"
            )
            .textContent =

              open
              ? "−"
              : "＋";

        }
      );

    });

}



/* ============================================================
   ROUTER
============================================================ */

const ROUTES = [

  "home",
  "news",
  "talents",
  "events",
  "interviews",
  "about",
  "recruit",
  "recruit-virtual",
  "recruit-real"

];



function getRoute() {

  return (
    location.hash.replace(
      "#",
      ""
    )
    ||
    "home"
  );

}



function showRoute(route) {

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
    observeReveal,
    60
  );

}



/* ============================================================
   BUBBLE PAGE TRANSITION
============================================================ */

let currentRoute =
  getRoute();



function transitionToRoute(route) {

  const overlay =
    document.getElementById(
      "bubbleTransition"
    );


  overlay.classList.add(
    "active"
  );


  setTimeout(
    () => {

      showRoute(route);

    },
    380
  );


  setTimeout(
    () => {

      overlay.classList.remove(
        "active"
      );

    },
    760
  );

}



window.addEventListener(
  "hashchange",
  () => {

    const route =
      getRoute();


    if(
      route === currentRoute
    ) {

      return;

    }


    currentRoute =
      route;


    transitionToRoute(
      route
    );

  }
);



/* ============================================================
   LOADING
============================================================ */

function startLoading() {

  if(
    !SITE_CONFIG.loadingEnabled
  ) {

    document
      .getElementById(
        "loadingScreen"
      )
      .remove();

    return;

  }


  const screen =
    document.getElementById(
      "loadingScreen"
    );


  const bar =
    document.getElementById(
      "loadingProgressBar"
    );


  const percentText =
    document.getElementById(
      "loadingPercent"
    );


  const complete =
    document.getElementById(
      "loadingComplete"
    );


  let percent =
    0;


  const duration =
    SITE_CONFIG.loadingDuration;


  const interval =
    setInterval(
      () => {

        percent +=
          Math.ceil(
            Math.random() * 8
          );


        if(
          percent >= 100
        ) {

          percent =
            100;

        }


        bar.style.width =
          `${percent}%`;


        percentText.textContent =
          `${percent}%`;


        if(percent >= 35) {

          setConnection(
            "iriam",
            true
          );

        }


        if(percent >= 62) {

          setConnection(
            "tiktok",
            true
          );

        }


        if(percent >= 82) {

          setConnection(
            "mirrativ",
            true
          );

        }


        if(percent >= 100) {

          clearInterval(
            interval
          );


          complete.classList.add(
            "show"
          );


          setTimeout(
            () => {

              screen.classList.add(
                "completed"
              );


              document
                .getElementById(
                  "bubbleTransition"
                )
                .classList.add(
                  "loading-finish"
                );

            },
            300
          );


          setTimeout(
            () => {

              screen.remove();


              document
                .getElementById(
                  "bubbleTransition"
                )
                .classList.remove(
                  "loading-finish"
                );

            },
            1050
          );

        }

      },
      duration / 18
    );

}



function setConnection(
  key,
  connected
) {

  const element =
    document.querySelector(
      `[data-connection="${key}"]`
    );


  if(!element) {

    return;

  }


  if(connected) {

    element.textContent =
      "CONNECTED";

    element.classList.add(
      "connected"
    );

  }

}



/* ============================================================
   MENU
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

}



function closeMobileMenu() {

  document
    .getElementById(
      "globalNav"
    )
    .classList.remove(
      "open"
    );

}



/* ============================================================
   HEADER
============================================================ */

function setupHeader() {

  const header =
    document.getElementById(
      "siteHeader"
    );


  window.addEventListener(
    "scroll",
    () => {

      header.classList.toggle(
        "scrolled",
        scrollY > 30
      );

    },
    {
      passive: true
    }
  );

}



/* ============================================================
   REVEAL
============================================================ */

function observeReveal() {

  const elements =
    document.querySelectorAll(
      ".page-view.active .reveal"
    );


  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if(
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "revealed"
            );


            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: .12
      }

    );


  elements.forEach(
    element =>
    observer.observe(
      element
    )
  );

}



/* ============================================================
   CLOSE MODALS
============================================================ */

function closeModals() {

  document
    .querySelectorAll(
      ".modal-overlay"
    )
    .forEach(modal => {

      modal.classList.remove(
        "active"
      );

    });


  document.body.classList.remove(
    "modal-open"
  );

}



/* ============================================================
   INIT
============================================================ */

function init() {

  applyConfig();

  renderAll();

  setupTalentFilter();

  setupEventFilter();

  setupMobileMenu();

  setupHeader();

  observeReveal();

  showRoute(
    getRoute()
  );


  document
    .getElementById(
      "talentModalClose"
    )
    .addEventListener(
      "click",
      closeModals
    );


  document
    .getElementById(
      "interviewModalClose"
    )
    .addEventListener(
      "click",
      closeModals
    );


  document
    .querySelectorAll(
      ".modal-overlay"
    )
    .forEach(modal => {

      modal.addEventListener(
        "click",
        event => {

          if(
            event.target === modal
          ) {

            closeModals();

          }

        }
      );

    });


  document.addEventListener(
    "keydown",
    event => {

      if(
        event.key === "Escape"
      ) {

        closeModals();

        closeMobileMenu();

      }

    }
  );


  startLoading();

}



document.addEventListener(
  "DOMContentLoaded",
  init
);
