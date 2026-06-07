document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     SEARCH COURSES
  ========================================= */

  const searchInput =
    document.getElementById("courseSearch");

  const courseCards =
    document.querySelectorAll(".course-card");

  if(searchInput){

    searchInput.addEventListener("keyup", () => {

      const searchValue =
        searchInput.value.toLowerCase();

      courseCards.forEach((card) => {

        const title =
          card.querySelector("h3")
          .innerText
          .toLowerCase();

        if(title.includes(searchValue)){

          card.style.display = "block";

        }else{

          card.style.display = "none";

        }

      });

    });

  }


  /* =========================================
     FILTER COURSES
  ========================================= */

  const filterButtons =
    document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

      filterButtons.forEach((btn) => {

        btn.classList.remove("active");

      });

      button.classList.add("active");

      const filter =
        button.innerText.toLowerCase();

      courseCards.forEach((card) => {

        const status =
          card.dataset.status;

        if(filter === "all"){

          card.style.display = "block";

        }

        else if(status === filter){

          card.style.display = "block";

        }

        else{

          card.style.display = "none";

        }

      });

    });

  });


  /* =========================================
     CARD CLICK EFFECT
  ========================================= */

  courseCards.forEach((card) => {

    card.addEventListener("click", () => {

      courseCards.forEach((item) => {

        item.classList.remove("selected-course");

      });

      card.classList.add("selected-course");

    });

  });


  /* =========================================
     LOCKED COURSE WARNING
  ========================================= */

  const lockedCourses =
    document.querySelectorAll(".locked-course");

  lockedCourses.forEach((course) => {

    course.addEventListener("click", () => {

      alert(
        "This course is locked. Complete the Foundation Program to unlock it."
      );

    });

  });


  /* =========================================
     PROGRESS ANIMATION
  ========================================= */

  const progressBars =
    document.querySelectorAll(".progress-track span");

  progressBars.forEach((bar) => {

    const finalWidth =
      bar.style.width;

    bar.style.width = "0%";

    setTimeout(() => {

      bar.style.transition =
        "width 1s ease";

      bar.style.width =
        finalWidth;

    }, 300);

  });

});