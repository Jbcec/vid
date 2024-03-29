const phoneWidth = window.matchMedia("(max-width: 767px)");
const pcWidth = window.matchMedia("(min-width: 768px)");
var porcentageAnimated = false;

document.addEventListener("DOMContentLoaded", () => {
  /* ----------------------------------------------------
   *  - Scripts que se ejecutan una vez se carga la pagina
   * ------------------------------------------------------ */

  suscribeMenuEvents();
});

function suscribeMenuEvents() {
  const popupMenu = document.getElementById("menu__btn_toggle");
  const navContainer = document.getElementById("nav__container");
  const cards = document.getElementsByClassName("blog-card");
  var prevScrollpos = window.pageYOffset;

  window.addEventListener("scroll", () => {
    if (popupMenu.checked) popupMenu.click();

    var currentScrollPos = window.pageYOffset;
    prevScrollpos = currentScrollPos;
  });

  window.addEventListener("click", (ev) => {
    const popupMenu = document.getElementById("menu__btn_toggle");
    if (popupMenu.checked) {
      if (ev.path.filter((f) => f.id == "menu__btn_toggle_hamb") == 0) {
        popupMenu.click();
      }
    }
  });
}
