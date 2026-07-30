/* Theme toggle. The initial value is set by a small inline script in <head> so
   the page never paints the wrong theme first; this file only handles the
   button and keeps the label in sync. */

(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  function label() {
    var isDark = root.dataset.theme === "dark";
    button.textContent = isDark ? "LT" : "DK";
    button.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  }

  button.addEventListener("click", function () {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", root.dataset.theme);
    } catch (e) {
      /* private browsing — the theme just won't persist */
    }
    label();
  });

  label();
})();
