document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     DOWNLOAD CERTIFICATE
  ========================================= */

  const downloadButtons =
    document.querySelectorAll(".download-btn");

  downloadButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const certificateName =
        button.closest(".certificate-card")
        .querySelector("h3")
        .innerText;

      alert(
        `Downloading: ${certificateName}\n\nBackend connect hone ke baad PDF download hoga.`
      );

    });

  });


  /* =========================================
     SHARE CERTIFICATE
  ========================================= */

  const shareButtons =
    document.querySelectorAll(".share-btn");

  shareButtons.forEach((button) => {

    button.addEventListener("click", async () => {

      const certificateName =
        button.closest(".certificate-card")
        .querySelector("h3")
        .innerText;

      const shareData = {

        title: "SkilledTrader Certificate",

        text:
          `I successfully completed ${certificateName} on SkilledTrader.`,

        url:
          window.location.href

      };

      if(navigator.share){

        try{

          await navigator.share(shareData);

        }

        catch(error){

          console.log(error);

        }

      }else{

        navigator.clipboard.writeText(
          window.location.href
        );

        alert(
          "Certificate link copied successfully."
        );

      }

    });

  });


  /* =========================================
     CERTIFICATE PREVIEW
  ========================================= */

  const certificateCards =
    document.querySelectorAll(".certificate-card");

  certificateCards.forEach((card) => {

    card.addEventListener("click", (e) => {

      if(
        e.target.classList.contains("download-btn") ||
        e.target.classList.contains("share-btn")
      ){
        return;
      }

      const title =
        card.querySelector("h3").innerText;

      const status =
        card.querySelector(".status").innerText;

      alert(
        `Certificate: ${title}\nStatus: ${status}`
      );

    });

  });


  /* =========================================
     LOCKED CERTIFICATE
  ========================================= */

  const lockedCards =
    document.querySelectorAll(".locked");

  lockedCards.forEach((card) => {

    card.addEventListener("click", () => {

      const title =
        card.querySelector("h3").innerText;

      alert(
        `${title}\n\nComplete the course to unlock this certificate.`
      );

    });

  });


  /* =========================================
     STATS ANIMATION
  ========================================= */

  const statNumbers =
    document.querySelectorAll(".stat-card h2");

  statNumbers.forEach((stat) => {

    const originalText =
      stat.innerText;

    const target =
      parseInt(originalText);

    if(isNaN(target)) return;

    let count = 0;

    const interval =
      setInterval(() => {

        count++;

        stat.innerText = count;

        if(count >= target){

          stat.innerText =
            originalText;

          clearInterval(interval);

        }

      }, 40);

  });


  /* =========================================
     CARD HOVER EFFECT
  ========================================= */

  certificateCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

      card.style.transform =
        "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

      card.style.transform =
        "translateY(0)";

    });

  });


  /* =========================================
     FUTURE BACKEND PLAN
  ========================================= */

  /*
    Backend Integration:

    Student Completes Course
              ↓
        MongoDB Update
              ↓
      Certificate Generated
              ↓
          PDF Created
              ↓
      Download Button Active

    Future:
    - Unique Certificate ID
    - QR Verification
    - LinkedIn Share
    - Auto PDF Generation
    - Digital Signature
  */

});