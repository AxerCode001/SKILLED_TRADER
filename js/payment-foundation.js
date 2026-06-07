document.addEventListener("DOMContentLoaded", () => {

  const payBtn = document.getElementById("payBtn");

  const studentName = document.getElementById("studentName");
  const studentEmail = document.getElementById("studentEmail");
  const studentPhone = document.getElementById("studentPhone");

  if (!payBtn) return;

  payBtn.addEventListener("click", () => {

    const name = studentName.value.trim();
    const email = studentEmail.value.trim();
    const phone = studentPhone.value.trim();

    /* ==========================
      VALIDATION
    ========================== */

    if (!name) {
      alert("Please enter your full name");
      studentName.focus();
      return;
    }

    if (!email) {
      alert("Please enter your email address");
      studentEmail.focus();
      return;
    }

    if (!phone) {
      alert("Please enter your mobile number");
      studentPhone.focus();
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      studentEmail.focus();
      return;
    }

    if (phone.length < 10) {
      alert("Please enter a valid mobile number");
      studentPhone.focus();
      return;
    }

    /* ==========================
      BUTTON LOADING
    ========================== */

    payBtn.disabled = true;

    payBtn.textContent =
      "Processing Payment...";

    /* ==========================
      DEMO PAYMENT SUCCESS
      (Replace with Razorpay later)
    ========================== */

    setTimeout(() => {

      const paymentData = {

        studentName: name,
        studentEmail: email,
        studentPhone: phone,

        courseName:
          "Foundation Program",

        paymentStatus:
          "paid",

        paymentDate:
          new Date().toLocaleString(),

        foundationAccess:
          true

      };

      localStorage.setItem(
        "foundationStudent",
        JSON.stringify(paymentData)
      );

      alert(
        "Payment Successful!\nWelcome to Foundation Program."
      );

      window.location.href =
        "foundation-program.html";

    }, 2000);

  });

});