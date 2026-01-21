document.querySelector("form").onsubmit = function(e) {
  e.preventDefault();

  if (
    email.value === localStorage.getItem("email") &&
    password.value === localStorage.getItem("password")
  ) {
    alert("مرحبا بك ❤️");
    window.location.href = "dashboard.html";
  } else {
    alert("معلومات خاطئة");
  }
};
