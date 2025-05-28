
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input[required], textarea");
  const emailInput = form.querySelector("#email");
  const phoneInput = form.querySelector("#phone-number");

  function showError(input, message) {
    input.classList.add("error");
    input.setAttribute("placeholder", message);
    input.style.border = "2px solid red";
    input.style.animation = "shake 0.3s ease";
    setTimeout(() => {
      input.style.animation = "";
    }, 300);
  }

  function clearError(input) {
    input.classList.remove("error");
    input.style.border = "";
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validatePhone(phone) {
    const regex = /^\+?[0-9\s\-]{7,15}$/;
    return regex.test(phone);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    inputs.forEach(input => {
      clearError(input);
      if (!input.value.trim()) {
        showError(input, "Field is required");
        valid = false;
      }
    });

    if (!validateEmail(emailInput.value)) {
      showError(emailInput, "Invalid email");
      valid = false;
    }

    if (!validatePhone(phoneInput.value)) {
      showError(phoneInput, "Invalid phone");
      valid = false;
    }

    if (valid) {
      form.reset();
      alert("✅ Message sent successfully!");
    }
  });
});
