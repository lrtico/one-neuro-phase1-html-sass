function tcTickSelected(element) {
  element.classList.toggle("question__checkbox--selected");
}

function menuToggle() {
  //alert("wax on");
  document.getElementsByTagName("body")[0].classList.toggle("menu-open");

  document.querySelector(".nav__burger").classList.toggle("is-open");

  const items = document.querySelectorAll(".nav__interior__items .nav__item");

  // get vendor transition property
  const docElemStyle = document.documentElement.style;
  const transitionProp =
    typeof docElemStyle.transition == "string"
      ? "transition"
      : "WebkitTransition";

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    // stagger transition with transitionDelay
    item.style[transitionProp + "Delay"] = i * 50 + "ms";
    item.classList.toggle("is-moved");
  }
}

const toggleVis = document.querySelector(".toggleVis");

toggleVis.onclick = function() {
  alert("wax on");
};

//$(function() {

//}); //Automatically run these jQuery scripts when the page loads
