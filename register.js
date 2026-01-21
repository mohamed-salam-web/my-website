document.querySelector("form").onsubmit = function(e) {
  e.preventDefault();

  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);

  alert("تم التسجيل بنجاح ✅");
  window.location.href = "login.html";
};
