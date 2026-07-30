/* Marks the nav link for whichever section is currently in view. */

(function () {
  var links = Array.prototype.slice.call(
    document.querySelectorAll(".masthead__nav a[href^='#']")
  );
  if (!links.length || !("IntersectionObserver" in window)) return;

  var byId = {};
  var sections = [];

  links.forEach(function (link) {
    var section = document.getElementById(link.hash.slice(1));
    if (!section) return;
    byId[section.id] = link;
    sections.push(section);
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.removeAttribute("aria-current");
        });
        byId[entry.target.id].setAttribute("aria-current", "true");
      });
    },
    /* A band across the upper third of the viewport: a section counts as
       "current" once its top has settled below the masthead. */
    { rootMargin: "-20% 0px -70% 0px" }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
