// The Unhurried Web — progressive enhancement only.
// The page reads fully without this file (commitment 02). JS only sharpens the sign-up.
(function () {
  "use strict";

  var form = document.querySelector(".signup");
  if (!form) return;

  var input = form.querySelector(".signup__input");
  var help = document.getElementById("signup-help");
  var btn = form.querySelector(".btn");
  var btnLabel = btn ? btn.querySelector(".btn__label") : null;
  if (!input || !help || !btn || !btnLabel) return;

  var helpDefault = help.textContent;
  var touched = false;
  var resetTimer = null;

  function isValidEmail(value) {
    // Deliberately permissive — the server is the real validator.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function showError(message) {
    input.setAttribute("aria-invalid", "true");
    help.textContent = message;
    help.classList.add("signup__help--error");
  }

  function clearError() {
    input.removeAttribute("aria-invalid");
    help.classList.remove("signup__help--error");
    if (help.textContent !== helpDefault) help.textContent = helpDefault;
  }

  // Validate on blur once, then re-validate on input (the "touched" pattern).
  input.addEventListener("blur", function () {
    touched = true;
    if (input.value.trim() === "") { clearError(); return; }
    if (!isValidEmail(input.value)) {
      showError("That address is missing an @ or a domain. Check it and try again.");
    } else {
      clearError();
    }
  });

  input.addEventListener("input", function () {
    if (!touched) return;
    if (input.value.trim() === "" || isValidEmail(input.value)) clearError();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!isValidEmail(input.value)) {
      touched = true;
      showError("Enter an email address so we can add your name. We never share it.");
      input.focus();
      return;
    }

    clearError();

    // In-flight: button shows a loading state; the field stays editable per the state recipe.
    btn.setAttribute("data-state", "loading");
    btn.setAttribute("aria-busy", "true");
    btnLabel.textContent = "Adding your name…";

    // No real endpoint here — settle into a quiet, visible success. Silent success = the state change itself.
    window.setTimeout(function () {
      btn.setAttribute("data-state", "success");
      btn.removeAttribute("aria-busy");
      btnLabel.textContent = "Signed. Your name is on the wall.";
      help.textContent = "Thank you. We’ll write when there’s something worth your time.";
      input.value = "";
      touched = false;

      if (resetTimer) window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(function () {
        btn.setAttribute("data-state", "idle");
        btnLabel.textContent = "Sign the manifesto";
        help.textContent = helpDefault;
      }, 6000);
    }, 700);
  });
})();
