document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     LOGOUT
  ========================================= */

  window.logout = function(){

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";

  };


  /* =========================================
     RANGE TABS
  ========================================= */

  const rangeButtons =
    document.querySelectorAll(".range-tabs button");

  rangeButtons.forEach((button) => {

    button.addEventListener("click", () => {

      rangeButtons.forEach((btn) => {

        btn.classList.remove("active");

      });

      button.classList.add("active");

      generateCandles(button.innerText);

    });

  });


  /* =========================================
     CANDLE DATA
  ========================================= */

  const candleSets = {

    "7D":[
      "green",
      "green big",
      "red",
      "green",
      "green big",
      "red big",
      "green"
    ],

    "15D":[
      "green",
      "red",
      "green",
      "green big",
      "red",
      "green",
      "green big",
      "red big",
      "green",
      "green"
    ],

    "1M":[
      "green",
      "green",
      "red",
      "green big",
      "red",
      "green",
      "red big",
      "green",
      "green big",
      "green",
      "red",
      "green"
    ],

    "3M":[
      "green big",
      "green",
      "red",
      "green",
      "green big",
      "red big",
      "green",
      "green",
      "red",
      "green big"
    ],

    "1Y":[
      "green",
      "green big",
      "green",
      "red",
      "red big",
      "green",
      "green big",
      "green",
      "red",
      "green big"
    ]

  };


  const labels = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "D8",
    "D9",
    "D10",
    "D11",
    "D12"
  ];


  function generateCandles(range){

    const board =
      document.getElementById("chartBoard");

    if(!board) return;

    board.innerHTML =
      `<div class="target-line"></div>`;

    const candles =
      candleSets[range] || candleSets["7D"];

    candles.forEach((type, index) => {

      const candle =
        document.createElement("div");

      candle.className =
        `study-candle ${type}`;

      if(type.includes("big") && type.includes("green")){

        candle.dataset.info =
          "Big Green Candle: student studied more than regular target.";

      }

      else if(type.includes("big") && type.includes("red")){

        candle.dataset.info =
          "Big Red Candle: no lecture opened for 2 days.";

      }

      else if(type.includes("green")){

        candle.dataset.info =
          "Green Candle: regular study completed.";

      }

      else{

        candle.dataset.info =
          "Red Candle: low study activity.";

      }

      candle.innerHTML =
        `
          <i></i>
          <b></b>
          <span>${labels[index] || "Day"}</span>
        `;

      board.appendChild(candle);

    });

  }


  /* =========================================
     CANDLE CLICK INFO
  ========================================= */

  document.addEventListener("click", (e) => {

    const candle =
      e.target.closest(".study-candle");

    if(!candle) return;

    alert(candle.dataset.info);

  });


  /* =========================================
     METRIC CARD ANIMATION
  ========================================= */

  const metricCards =
    document.querySelectorAll(".metric-card");

  metricCards.forEach((card, index) => {

    setTimeout(() => {

      card.style.opacity = "1";

      card.style.transform = "translateY(0)";

    }, index * 120);

  });


  /* =========================================
     QUICK ROW HOVER EFFECT
  ========================================= */

  const quickRows =
    document.querySelectorAll(".quick-row");

  quickRows.forEach((row) => {

    row.addEventListener("mouseenter", () => {

      row.style.transform =
        "translateX(6px)";

    });

    row.addEventListener("mouseleave", () => {

      row.style.transform =
        "translateX(0)";

    });

  });


 /* =========================================
   BELL NOTIFICATION REDIRECT
========================================= */

const bellBtn =
  document.querySelector(".bell-btn");

if(bellBtn){

  bellBtn.addEventListener("click", () => {

    window.location.href =
      "notifications.html";

  });

}


  /* =========================================
     DEFAULT CHART LOAD
  ========================================= */

  generateCandles("7D");

});