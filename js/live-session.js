document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     LIVE SESSION BUTTON
  ========================================= */

  const joinBtn =
    document.querySelector(".btn-primary");

  if(joinBtn){

    joinBtn.addEventListener("click", (e) => {

      e.preventDefault();

      const videoSection =
        document.querySelector("#live-class");

      if(videoSection){

        videoSection.scrollIntoView({
          behavior:"smooth"
        });

      }

    });

  }


  /* =========================================
     UPCOMING SESSION BUTTON
  ========================================= */

  const upcomingBtn =
    document.querySelector(".btn-secondary");

  if(upcomingBtn){

    upcomingBtn.addEventListener("click", (e) => {

      e.preventDefault();

      const upcomingSection =
        document.querySelector("#upcoming");

      if(upcomingSection){

        upcomingSection.scrollIntoView({
          behavior:"smooth"
        });

      }

    });

  }


  /* =========================================
     LIVE VIDEO PLACEHOLDER
  ========================================= */

  const playCircle =
    document.querySelector(".play-circle");

  if(playCircle){

    playCircle.addEventListener("click", () => {

      alert(
        "Live session stream will start here."
      );

    });

  }


  /* =========================================
     UPCOMING SESSION ACTIVE CARD
  ========================================= */

  const upcomingCards =
    document.querySelectorAll(".upcoming-card");

  upcomingCards.forEach((card) => {

    card.addEventListener("click", () => {

      upcomingCards.forEach((item) => {

        item.classList.remove("active-session");

      });

      card.classList.add("active-session");

    });

  });


  /* =========================================
     DOWNLOAD NOTES BUTTON
  ========================================= */

  const downloadBtn =
    document.querySelector(".download-notes");

  if(downloadBtn){

    downloadBtn.addEventListener("click", (e) => {

      e.preventDefault();

      alert(
        "Notes download will connect after backend integration."
      );

    });

  }


  /* =========================================
     LIVE STATUS ANIMATION
  ========================================= */

  const liveDot =
    document.querySelector(".live-dot");

  if(liveDot){

    setInterval(() => {

      liveDot.classList.toggle("blink");

    }, 700);

  }

});