document.addEventListener("DOMContentLoaded", () => {

  const moduleGroups = document.querySelectorAll(".module-group");
  const moduleTitles = document.querySelectorAll(".module-title");
  const chapterItems = document.querySelectorAll(".chapter-item");

  const courseVideo = document.querySelector("#courseVideo");
  const lessonTitle = document.querySelector("#lessonTitle");
  const lessonMeta = document.querySelector("#lessonMeta");
  const lessonDescription = document.querySelector("#lessonDescription");

  const markCompleteBtn = document.querySelector(".mark-complete-btn");
  const progressPercent = document.querySelector("#progressPercent");
  const progressText = document.querySelector("#progressText");
  const progressFill = document.querySelector(".progress-fill");
  const certificateCard = document.querySelector(".locked-certificate");

  const totalChapters = chapterItems.length;

  let completedChapters = [];
  let activeChapterIndex = 0;

  const descriptions = [
    "Understand what the stock market is, why companies list shares, how buyers and sellers participate, and why beginners need a structured learning path.",
    "Learn the role of NSE, BSE, and SEBI in the Indian stock market ecosystem.",
    "Understand who participates in the market and how institutions, retailers, and traders behave.",
    "Learn the meaning of equity, index, sectors, and how they connect with market movement.",

    "Understand the difference between trading and investing and which path suits beginners.",
    "Learn important trading sessions and how market timing affects decisions.",
    "Explore intraday traders, swing traders, positional traders, and investors.",
    "Understand common trading terms used in daily market learning.",

    "Learn different chart types and how traders use them for analysis.",
    "Understand timeframes and how they change market interpretation.",
    "Learn the structure of candlesticks and what candles show about price.",
    "Understand basic price action concepts for beginner chart reading.",

    "Learn what support zones are and how price reacts around them.",
    "Understand resistance zones and why sellers may become active there.",
    "Learn the basics of breakouts and how traders identify them.",
    "Understand retests and why they matter after breakout movements.",

    "Understand what an uptrend is and how to identify it on charts.",
    "Learn what a downtrend is and how market weakness appears.",
    "Understand sideways markets and range-bound price movement.",
    "Learn basic trend confirmation concepts before taking decisions.",

    "Learn position sizing and why capital allocation matters.",
    "Understand stop loss and how it protects your trading capital.",
    "Learn risk reward and why it matters more than accuracy.",
    "Understand capital preservation as the first rule of trading.",

    "Learn discipline and why rules matter in trading.",
    "Understand emotional control and how emotions affect decisions.",
    "Learn how to avoid FOMO and impulsive entries.",
    "Build a simple trading routine for consistent learning.",

    "Learn how to maintain a trading journal.",
    "Create a practice framework for chart reading and analysis.",
    "Understand the next advanced learning path after foundation.",
    "Complete the program and prepare for advanced market learning."
  ];

  function updateActiveChapter(index) {
    chapterItems.forEach((item) => {
      item.classList.remove("active");
    });

    const currentChapter = chapterItems[index];

    if (!currentChapter) return;

    currentChapter.classList.add("active");

    const parentModule = currentChapter.closest(".module-group");

    moduleGroups.forEach((module) => {
      module.classList.remove("active");
    });

    if (parentModule) {
      parentModule.classList.add("active");
    }

    const videoSrc = currentChapter.dataset.video;
    const title = currentChapter.dataset.title;
    const meta = currentChapter.dataset.meta;

    if (courseVideo && videoSrc) {
      const source = courseVideo.querySelector("source");
      source.src = videoSrc;
      courseVideo.load();
    }

    if (lessonTitle) {
      lessonTitle.textContent = title;
    }

    if (lessonMeta) {
      lessonMeta.textContent = meta;
    }

    if (lessonDescription) {
      lessonDescription.textContent = descriptions[index] || "Continue learning this chapter.";
    }

    activeChapterIndex = index;
    //localStorage.setItem("foundationActiveChapter", activeChapterIndex);//

    updateButtonState();
  }

  function updateProgress() {
    const completedCount = completedChapters.length;
    const percent = Math.round((completedCount / totalChapters) * 100);

    if (progressPercent) {
      progressPercent.textContent = `${percent}%`;
    }

    if (progressText) {
      progressText.textContent = `${completedCount} of ${totalChapters} chapters completed`;
    }

    if (progressFill) {
      progressFill.style.width = `${percent}%`;
    }

    chapterItems.forEach((item, index) => {
      const icon = item.querySelector("span");

      if (completedChapters.includes(index)) {
        item.classList.add("completed");
        if (icon) icon.textContent = "✓";
      } else {
        item.classList.remove("completed");
        if (icon) icon.textContent = item.classList.contains("active") ? "▶" : "○";
      }
    });

    if (completedCount >= totalChapters && certificateCard) {
      certificateCard.classList.remove("locked-certificate");
    }

    //localStorage.setItem("foundationCompletedChapters", JSON.stringify(completedChapters));//
  }

  function updateButtonState() {
    if (!markCompleteBtn) return;

    if (completedChapters.includes(activeChapterIndex)) {
      markCompleteBtn.textContent = "Chapter Completed";
      markCompleteBtn.disabled = true;
    } else {
      markCompleteBtn.textContent = "Mark Chapter as Complete";
      markCompleteBtn.disabled = false;
    }
  }

  moduleTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const module = title.closest(".module-group");

      if (!module) return;

      module.classList.toggle("active");
    });
  });

  chapterItems.forEach((chapter, index) => {
    chapter.addEventListener("click", () => {
      updateActiveChapter(index);
      updateProgress();
    });
  });

  if (markCompleteBtn) {
    markCompleteBtn.addEventListener("click", () => {
      if (!completedChapters.includes(activeChapterIndex)) {
        completedChapters.push(activeChapterIndex);
        updateProgress();
        updateButtonState();
      }
    });
  }

  updateActiveChapter(activeChapterIndex);
  updateProgress();

});