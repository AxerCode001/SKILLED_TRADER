document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.querySelector(".search-box input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const courseCards = document.querySelectorAll(".course-card");

  if(searchInput){

    searchInput.addEventListener("keyup", () => {

      const searchValue = searchInput.value.toLowerCase();

      courseCards.forEach((card) => {

        const title = card.querySelector("h3").innerText.toLowerCase();

        card.style.display = title.includes(searchValue) ? "block" : "none";

      });

    });

  }

  filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

      filterButtons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");

      const filter = button.innerText.toLowerCase();

      courseCards.forEach((card) => {

        const title = card.querySelector("h3").innerText.toLowerCase();

        if(filter === "all" || title.includes(filter)){
          card.style.display = "block";
        }else{
          card.style.display = "none";
        }

      });

    });

  });

});