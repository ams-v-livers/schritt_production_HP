/* ============================================================
   SCHRITT PRODUCTION
   APPLICATION
============================================================ */


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

  const normalized =
    date.replaceAll(
      "-",
      "."
    );


  const parts =
    normalized.split(".");


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
   ICONS
============================================================ */

function arrowIcon() {

  return `
    <span
      class="css-arrow-icon"
      aria-hidden="true"
    ></span>
  `;

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


      if(!url) {
        return;
      }


      link.href =
        url;


      if(
        url !== "#" &&
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
   HERO PICKUP
============================================================ */

function renderHeroPickup() {

  const talent =
    getTalent(
      HERO_PICKUP.talentId
    );


  if(!talent) {
    return;
  }


  const label =
    document.getElementById(
      "heroPickupLabel"
    );


  const imageWrap =
    document.getElementById(
      "heroPickupImageWrap"
    );


  const name =
    document.getElementById(
      "heroPickupName"
    );


  const reading =
    document.getElementById(
      "heroPickupReading"
    );


  const platforms =
    document.getElementById(
      "heroPickupPlatforms"
    );


  const profileButton =
    document.getElementById(
      "heroPickupProfile"
    );


  const liveButton =
    document.getElementById(
      "heroPickupLive"
    );


  if(label) {

    label.textContent =
      HERO_PICKUP.label;

  }


  if(name) {

    name.textContent =
      talent.name;

  }


  if(reading) {

    reading.textContent =
      talent.reading;

  }


  if(platforms) {

    platforms.innerHTML =
      talent.platforms

        .map(
          platform => `
            <span>
              ${platform}
            </span>
          `
        )

        .join("");

  }


  const pickupImage =
    HERO_PICKUP.image ||
    talent.image;


  if(imageWrap) {

    if(pickupImage) {

      imageWrap.innerHTML = `

        <img
          src="${pickupImage}"
          alt="${talent.name}"
          class="hero-pickup-image"
        >

      `;

    }

    else {

      imageWrap.innerHTML = `

        <div
          class="hero-pickup-placeholder"
          style="
            background:
            linear-gradient(
              145deg,
              ${talent.colorA},
              ${talent.colorB}
            );
          "
        >

          ${talent.name.charAt(0)}

        </div>

      `;

    }

  }


  if(profileButton) {

    if(
      HERO_PICKUP.showProfileButton
    ) {

      profileButton.style.display =
        "inline-flex";


      profileButton.onclick =
        () => {

          openTalentModal(
            talent.id
          );

        };

    }

    else {

      profileButton.style.display =
        "none";

    }

  }


  if(liveButton) {

    if(
      HERO_PICKUP.showLiveButton &&
      HERO_PICKUP.liveUrl &&
      HERO_PICKUP.liveUrl !== "#"
    ) {

      liveButton.style.display =
        "inline-flex";


      liveButton.href =
        HERO_PICKUP.liveUrl;

    }

    else {

      liveButton.style.display =
        "none";

    }

  }

}



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


  const platformHTML =
    talent.platforms

      .map(
        platform => `
          <span class="talent-platform">
            ${platform}
          </span>
        `
      )

      .join("");


  const typeLabel =
    talent.type === "V"
      ? "VIRTUAL LIVER"
      : "REAL LIVER";


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

        ${imageHTML}

        <span class="talent-type">
          ${typeLabel}
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
          ${platformHTML}
        </div>

        <div class="talent-footer">

          <span>
            PROFILE
          </span>

          ${arrowIcon()}

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
   EVENT
============================================================ */

function createEventCard(event) {

  const date =
    formatDateParts(
      event.date
    );


  const imageHTML =
    event.image

      ? `
        <div class="event-thumbnail">

          <img
            src="${event.image}"
            alt="${event.title}"
            loading="lazy"
          >

        </div>
      `

      : "";


  return `

    <article class="event-card">

      ${imageHTML}

      <div class="event-card-main">

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
            class="inline-arrow-link"
          >
            MORE

            ${arrowIcon()}
          </a>

        </div>

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


  const imageHTML =
    visual

      ? `
        <img
          src="${visual}"
          alt="${talent.name}"
          loading="lazy"
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

        ${imageHTML}

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

        <strong class="inline-arrow-link">

          READ INTERVIEW

          ${arrowIcon()}

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

      <strong class="inline-arrow-link">

        READ NOTE

        ${arrowIcon()}

      </strong>

    </a>

  `;

}



/* ============================================================
   FAQ
============================================================ */

function createFaqItem(
  item,
  index
) {

  const number =
    String(
      index + 1
    )
      .padStart(
        2,
        "0"
      );


  return `

    <article class="faq-item">

      <button
        class="faq-question"
        aria-expanded="false"
      >

        <span class="faq-number">
          ${number}
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

        ${imageHTML}

      </div>

      <div class="real-sample-body">

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

  const homeNews =
    document.getElementById(
      "homeNews"
    );


  const allNews =
    document.getElementById(
      "allNews"
    );


  const homeTalents =
    document.getElementById(
      "homeTalents"
    );


  const allTalents =
    document.getElementById(
      "allTalents"
    );


  const homeEvents =
    document.getElementById(
      "homeEvents"
    );


  const allEvents =
    document.getElementById(
      "allEvents"
    );


  const homeInterviews =
    document.getElementById(
      "homeInterviews"
    );


  const allInterviews =
    document.getElementById(
      "allInterviews"
    );


  const journalGrid =
    document.getElementById(
      "journalGrid"
    );


  const faqList =
    document.getElementById(
      "faqList"
    );


  const realSampleGrid =
    document.getElementById(
      "realSampleGrid"
    );


  if(homeNews) {

    homeNews.innerHTML =
      NEWS

        .slice(
          0,
          SITE_CONFIG.homeDisplay.news
        )

        .map(
          createNewsCard
        )

        .join("");

  }


  if(allNews) {

    allNews.innerHTML =
      NEWS
        .map(
          createNewsCard
        )
        .join("");

  }


  if(homeTalents) {

    homeTalents.innerHTML =
      TALENTS

        .slice(
          0,
          SITE_CONFIG.homeDisplay.talents
        )

        .map(
          createTalentCard
        )

        .join("");

  }


  if(allTalents) {

    allTalents.innerHTML =
      TALENTS
        .map(
          createTalentCard
        )
        .join("");

  }


  if(homeEvents) {

    homeEvents.innerHTML =
      EVENTS

        .slice(
          0,
          SITE_CONFIG.homeDisplay.events
        )

        .map(
          createEventCard
        )

        .join("");

  }


  if(allEvents) {

    allEvents.innerHTML =
      EVENTS
        .map(
          createEventCard
        )
        .join("");

  }


  if(homeInterviews) {

    homeInterviews.innerHTML =
      INTERVIEWS

        .slice(
          0,
          SITE_CONFIG.homeDisplay.interviews
        )

        .map(
          createInterviewCard
        )

        .join("");

  }


  if(allInterviews) {

    allInterviews.innerHTML =
      INTERVIEWS
        .map(
          createInterviewCard
        )
        .join("");

  }


  if(journalGrid) {

    journalGrid.innerHTML =
      JOURNAL_ARTICLES

        .slice(
          0,
          SITE_CONFIG.homeDisplay.journals
        )

        .map(
          createJournalCard
        )

        .join("");

  }


  if(faqList) {

    faqList.innerHTML =
      FAQ
        .map(
          createFaqItem
        )
        .join("");

  }


  if(realSampleGrid) {

    realSampleGrid.innerHTML =
      REAL_LIVER_SAMPLES
        .map(
          createRealSample
        )
        .join("");

  }


  renderHeroPickup();

  bindTalentCards();

  bindInterviewCards();

  setupFaq();

}



/* ============================================================
   TALENT FILTER
============================================================ */

function setupTalentFilter() {

  const buttons =
    document.querySelectorAll(
      "[data-filter]"
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


        const filter =
          button.dataset.filter;


        let filtered =
          TALENTS;


        if(
          filter === "V"
        ) {

          filtered =
            TALENTS.filter(
              talent =>
                talent.type === "V"
            );

        }

        else if(
          filter === "REAL"
        ) {

          filtered =
            TALENTS.filter(
              talent =>
                talent.type === "REAL"
            );

        }

        else if(
          filter !== "ALL"
        ) {

          filtered =
            TALENTS.filter(
              talent =>
                talent.platforms.includes(
                  filter
                )
            );

        }


        const target =
          document.getElementById(
            "allTalents"
          );


        if(!target) {
          return;
        }


        target.innerHTML =
          filtered
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

  const buttons =
    document.querySelectorAll(
      "[data-event-filter]"
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


        const filter =
          button.dataset.eventFilter;


        const filtered =
          filter === "ALL"

            ? EVENTS

            : EVENTS.filter(
                event =>
                  event.platform === filter
              );


        const target =
          document.getElementById(
            "allEvents"
          );


        if(!target) {
          return;
        }


        target.innerHTML =
          filtered
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

          const id =
            Number(
              card.dataset.talentId
            );


          openTalentModal(
            id
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


  if(
    !modal ||
    !visual ||
    !initial
  ) {
    return;
  }


  visual.style.background =
    `
      linear-gradient(
        145deg,
        ${talent.colorA},
        ${talent.colorB}
      )
    `;


  initial.innerHTML =
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
        platform => `
          <span>
            ${platform}
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
            class="inline-arrow-link"
          >

            ${name}

            ${arrowIcon()}

          </a>
        `
      )

      .join("");


  modal.classList.add(
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

          const id =
            Number(
              card.dataset.interviewId
            );


          openInterviewModal(
            id
          );

        }
      );

    });

}



function openInterviewModal(id) {

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


  const questionHTML =
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


  const content =
    document.getElementById(
      "interviewModalContent"
    );


  const modal =
    document.getElementById(
      "interviewModal"
    );


  if(
    !content ||
    !modal
  ) {
    return;
  }


  content.innerHTML = `

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

    ${questionHTML}

  `;


  modal.classList.add(
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


          if(!item) {
            return;
          }


          const open =
            item.classList.toggle(
              "open"
            );


          button.setAttribute(
            "aria-expanded",
            String(open)
          );


          const icon =
            button.querySelector(
              ".faq-icon"
            );


          if(icon) {

            icon.textContent =
              open
                ? "−"
                : "＋";

          }

        }
      );

    });

}



/* ============================================================
   ROUTING
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
    location.hash
      .replace(
        "#",
        ""
      )

    || "home"
  );

}



function showRoute(route) {

  if(
    !ROUTES.includes(
      route
    )
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


  const page =
    document.getElementById(
      `page-${route}`
    );


  if(page) {

    page.classList.add(
      "active"
    );

  }


  closeMobileMenu();


  window.scrollTo(
    0,
    0
  );


  setTimeout(
    observeReveal,
    50
  );

}



/* ============================================================
   BUBBLE TRANSITION
============================================================ */

let currentRoute =
  getRoute();


function transitionRoute(route) {

  const transition =
    document.getElementById(
      "bubbleTransition"
    );


  if(!transition) {

    showRoute(
      route
    );

    return;

  }


  transition.classList.add(
    "active"
  );


  setTimeout(
    () => {

      showRoute(
        route
      );

    },
    360
  );


  setTimeout(
    () => {

      transition.classList.remove(
        "active"
      );

    },
    780
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


    transitionRoute(
      route
    );

  }
);



/* ============================================================
   LOADING
============================================================ */

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



function startLoading() {

  const screen =
    document.getElementById(
      "loadingScreen"
    );


  if(!screen) {
    return;
  }


  if(
    !SITE_CONFIG.loadingEnabled
  ) {

    screen.remove();

    return;

  }


  const bar =
    document.getElementById(
      "loadingProgressBar"
    );


  const text =
    document.getElementById(
      "loadingPercent"
    );


  const complete =
    document.getElementById(
      "loadingComplete"
    );


  let progress =
    0;


  const tick =
    Math.max(
      70,
      SITE_CONFIG.loadingDuration / 20
    );


  const timer =
    setInterval(
      () => {

        progress +=
          Math.ceil(
            Math.random() * 8
          );


        if(
          progress >= 100
        ) {

          progress =
            100;

        }


        if(bar) {

          bar.style.width =
            `${progress}%`;

        }


        if(text) {

          text.textContent =
            `${progress}%`;

        }


        if(
          progress >= 30
        ) {

          setConnection(
            "iriam",
            true
          );

        }


        if(
          progress >= 58
        ) {

          setConnection(
            "tiktok",
            true
          );

        }


        if(
          progress >= 82
        ) {

          setConnection(
            "mirrativ",
            true
          );

        }


        if(
          progress >= 100
        ) {

          clearInterval(
            timer
          );


          if(complete) {

            complete.classList.add(
              "show"
            );

          }


          setTimeout(
            () => {

              const transition =
                document.getElementById(
                  "bubbleTransition"
                );


              if(transition) {

                transition.classList.add(
                  "loading-finish"
                );

              }

            },
            220
          );


          setTimeout(
            () => {

              screen.classList.add(
                "finished"
              );

            },
            600
          );


          setTimeout(
            () => {

              screen.remove();


              const transition =
                document.getElementById(
                  "bubbleTransition"
                );


              if(transition) {

                transition.classList.remove(
                  "loading-finish"
                );

              }

            },
            1150
          );

        }

      },
      tick
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


  if(
    !button ||
    !nav
  ) {
    return;
  }


  button.addEventListener(
    "click",
    () => {

      const open =
        nav.classList.toggle(
          "open"
        );


      button.setAttribute(
        "aria-expanded",
        String(open)
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


  if(nav) {

    nav.classList.remove(
      "open"
    );

  }


  if(button) {

    button.setAttribute(
      "aria-expanded",
      "false"
    );

  }

}



/* ============================================================
   HEADER
============================================================ */

function setupHeader() {

  const header =
    document.getElementById(
      "siteHeader"
    );


  if(!header) {
    return;
  }


  const update =
    () => {

      header.classList.toggle(
        "scrolled",
        window.scrollY > 30
      );

    };


  window.addEventListener(
    "scroll",
    update,
    {
      passive:
        true
    }
  );


  update();

}



/* ============================================================
   REVEAL
============================================================ */

function observeReveal() {

  const elements =
    document.querySelectorAll(
      ".page-view.active .reveal"
    );


  if(
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(
      element =>
        element.classList.add(
          "revealed"
        )
    );

    return;

  }


  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if(
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add(
                "revealed"
              );


            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold:
          0.12,

        rootMargin:
          "0px 0px -20px 0px"
      }

    );


  elements.forEach(
    element => {

      observer.observe(
        element
      );

    }
  );

}



/* ============================================================
   MODALS
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



function setupModalEvents() {

  const talentClose =
    document.getElementById(
      "talentModalClose"
    );


  const interviewClose =
    document.getElementById(
      "interviewModalClose"
    );


  if(talentClose) {

    talentClose.addEventListener(
      "click",
      closeModals
    );

  }


  if(interviewClose) {

    interviewClose.addEventListener(
      "click",
      closeModals
    );

  }


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

}



/* ============================================================
   AUTO INFINITE MARQUEE
============================================================ */

function setupAutoMarquees() {

  const marquees =
    document.querySelectorAll(
      ".auto-marquee"
    );


  marquees.forEach(marquee => {

    const track =
      marquee.querySelector(
        ".auto-marquee-track"
      );


    const source =
      marquee.querySelector(
        ".auto-marquee-source"
      );


    if(
      !track ||
      !source
    ) {
      return;
    }


    const sourceHTML =
      source.innerHTML;


    let resizeTimer =
      null;


    function build() {

      if(
        track._marqueeAnimation
      ) {

        track
          ._marqueeAnimation
          .cancel();

      }


      track.innerHTML =
        "";


      const sample =
        document.createElement(
          "div"
        );


      sample.className =
        "auto-marquee-unit";


      sample.innerHTML =
        sourceHTML;


      track.appendChild(
        sample
      );


      const unitWidth =
        sample
          .getBoundingClientRect()
          .width;


      const containerWidth =
        marquee
          .getBoundingClientRect()
          .width;


      if(
        unitWidth <= 0 ||
        containerWidth <= 0
      ) {
        return;
      }


      /*
        1レーンを画面幅の2倍以上にします。

        これにより、右側が空白になる前に
        必ず次の文字列が続きます。
      */

      const repeatCount =
        Math.max(
          3,

          Math.ceil(
            containerWidth * 2 /
            unitWidth
          ) + 2
        );


      const lane1 =
        document.createElement(
          "div"
        );


      lane1.className =
        "auto-marquee-lane";


      for(
        let i = 0;
        i < repeatCount;
        i++
      ) {

        const clone =
          sample.cloneNode(
            true
          );


        lane1.appendChild(
          clone
        );

      }


      const lane2 =
        lane1.cloneNode(
          true
        );


      lane2.setAttribute(
        "aria-hidden",
        "true"
      );


      track.innerHTML =
        "";


      track.appendChild(
        lane1
      );


      track.appendChild(
        lane2
      );


      const laneWidth =
        lane1
          .getBoundingClientRect()
          .width;


      const speed =
        Number(
          marquee.dataset.marqueeSpeed
        ) || 40;


      const duration =
        laneWidth /
        speed *
        1000;


      track._marqueeAnimation =
        track.animate(

          [
            {
              transform:
                "translate3d(0,0,0)"
            },

            {
              transform:
                `translate3d(-${laneWidth}px,0,0)`
            }
          ],

          {
            duration:
              duration,

            iterations:
              Infinity,

            easing:
              "linear"
          }

        );

    }


    build();


    /*
      Webフォント読み込み後にも再構築
      → 幅ズレ防止
    */

    if(
      document.fonts &&
      document.fonts.ready
    ) {

      document.fonts.ready.then(
        build
      );

    }


    /*
      横画面・縦画面切り替えにも対応
    */

    window.addEventListener(
      "resize",
      () => {

        clearTimeout(
          resizeTimer
        );


        resizeTimer =
          setTimeout(
            build,
            180
          );

      }
    );

  });

}



/* ============================================================
   INITIALIZE
============================================================ */

function initializeSite() {

  applyConfig();

  renderAll();

  setupTalentFilter();

  setupEventFilter();

  setupMobileMenu();

  setupHeader();

  setupModalEvents();

  setupAutoMarquees();

  showRoute(
    getRoute()
  );

  observeReveal();

  startLoading();

}


document.addEventListener(
  "DOMContentLoaded",
  initializeSite
);
