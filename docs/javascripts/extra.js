/* ============================================================
   SampleBlog – Extra JavaScript
   Hero image injection + contact form handling
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* ----------------------------------------------------------
     Hero image: read page-level meta attribute and set
     background-image on the .sb-hero element
  ---------------------------------------------------------- */
  var hero = document.querySelector(".sb-hero[data-hero-image]");
  if (hero) {
    var img = hero.getAttribute("data-hero-image");
    if (img) {
      hero.style.backgroundImage = "url('" + img + "')";
    }
  }

  /* ----------------------------------------------------------
     Contact form: client-side validation + success message
  ---------------------------------------------------------- */
  var form = document.getElementById("sb-contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name    = form.querySelector("#contact-name");
      var email   = form.querySelector("#contact-email");
      var message = form.querySelector("#contact-message");
      var valid   = true;

      [name, email, message].forEach(function (field) {
        field.style.borderColor = "";
        if (!field.value.trim()) {
          field.style.borderColor = "#ef4444";
          valid = false;
        }
      });

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = "#ef4444";
        valid = false;
      }

      if (!valid) return;

      // Replace form with success message
      var success = document.createElement("div");
      success.setAttribute("role", "alert");
      success.setAttribute("aria-live", "polite");
      success.style.cssText = [
        "text-align:center",
        "padding:2.5rem 1rem",
        "font-size:1.1rem",
      ].join(";");
      success.innerHTML = [
        "<span style=\"font-size:3rem\" aria-hidden=\"true\">&#10003;</span>",
        "<p style=\"font-weight:700;margin:.75rem 0 .25rem\">Message sent!</p>",
        "<p style=\"opacity:.75\">Thanks for getting in touch. We'll reply soon.</p>",
      ].join("");

      form.parentNode.replaceChild(success, form);
    });
  }

});
