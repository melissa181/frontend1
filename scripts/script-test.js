document.addEventListener("DOMContentLoaded", () => {
  console.log("Tab JS running");

  // --- Hamburger Menu ---
  const menuOpenButton = document.querySelector("header div > ul button");
  const menuSluitButton = document.querySelector("header div nav:last-of-type button");

  if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => {
      const deNav = document.querySelector("header div nav:last-of-type");
      if (deNav) deNav.classList.add("is-open");
    });
  }

  if (menuSluitButton) {
    menuSluitButton.addEventListener("click", () => {
      const deNav = document.querySelector("header div nav:last-of-type");
      if (deNav) deNav.classList.remove("is-open");
    });
  }

  // --- Intersection Observer ---
  const div = document.querySelector("div");
  const FirstSection = document.querySelector("main section:nth-of-type(1)");

  if (div && FirstSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          div.classList.add("transparent");
        } else {
          div.classList.remove("transparent");
        }
      },
      {}
    );

    observer.observe(FirstSection);
  }

  // --- Video Controls ---
  const videoButton = document.querySelector("main section:nth-of-type(3) button");
  const videoButtonImg = document.querySelector("main section:nth-of-type(3) button img");
  const deVideo = document.querySelector("main section:nth-of-type(3) video");

  if (videoButton && videoButtonImg && deVideo) {
    videoButton.addEventListener("click", () => {
      if (deVideo.paused) {
        deVideo.play();
        videoButtonImg.src = "images/pause3.svg";
        videoButtonImg.alt = "pauze";
      } else {
        deVideo.pause();
        videoButtonImg.src = "images/play.svg";
        videoButtonImg.alt = "play";
      }
    });
  }

  // --- Tabs ---
  const section = document.querySelector("main section:nth-of-type(2)");
  if (section) {
    const buttons = section.querySelectorAll("nav > button");
    const articles = section.querySelectorAll("article");

    console.log("Buttons found:", buttons.length);
    console.log("Articles found:", articles.length);

    articles.forEach((article, i) => (article.style.display = i === 0 ? "block" : "none"));
    if (buttons[0]) buttons[0].classList.add("active");

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        articles.forEach((article) => (article.style.display = "none"));
        articles[index].style.display = "block";

        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  }
});
















