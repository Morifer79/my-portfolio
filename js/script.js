const lightStyles = document.querySelectorAll(
  "link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"
);
const darkStyles = document.querySelectorAll(
  "link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"
);
const darkSchemeMedia = matchMedia("(prefers-color-scheme: dark)");
const switcherRadios = document.querySelectorAll(".switcher-radio");

function setupSwitcher() {
  const savedScheme = getSavedScheme();

  if (savedScheme !== null) {
    const currentRadio = document.querySelector(
      `.switcher-radio[value=${savedScheme}]`
    );
    currentRadio.checked = true;
  }
  [...switcherRadios].forEach((radio) => {
    radio.addEventListener("change", (e) => {
      setScheme(e.target.value);
    });
  });
}

function setupScheme() {
  const savedScheme = getSavedScheme();
  const systemScheme = getSystemScheme();

  if (savedScheme === null) return;

  if (savedScheme !== systemScheme) {
    setScheme(savedScheme);
  }
}

function setScheme(scheme) {
  switchMedia(scheme);

  if (scheme === "auto") {
    clearScheme();
  } else {
    saveScheme(scheme);
  }
}

function switchMedia(scheme) {
  let lightMedia;
  let darkMedia;

  if (scheme === "auto") {
    lightMedia = "(prefers-color-scheme: light)";
    darkMedia = "(prefers-color-scheme: dark)";
  } else {
    lightMedia = scheme === "light" ? "all" : "not all";
    darkMedia = scheme === "dark" ? "all" : "not all";
  }
  [...lightStyles].forEach((link) => {
    link.media = lightMedia;
  });
  [...darkStyles].forEach((link) => {
    link.media = darkMedia;
  });
}

function getSystemScheme() {
  const darkScheme = darkSchemeMedia.matches;

  return darkScheme ? "dark" : "light";
}

function getSavedScheme() {
  return localStorage.getItem("color-scheme");
}

function saveScheme(scheme) {
  localStorage.setItem("color-scheme", scheme);
}

function clearScheme() {
  localStorage.removeItem("color-scheme");
}

setupSwitcher();
setupScheme();

// ************************************************

let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

if (window.location.pathname === '/my-portfolio/' || window.location.pathname === '/my-portfolio/index.html') {
  window.addEventListener("scroll", () => {
    let value = window.scrollY;
  
    text.style.marginTop = value * 2.5 + "px";
    leaf.style.top = value * -1.5 + "px";
    leaf.style.left = value * 1.5 + "px";
    hill5.style.left = value * 1.5 + "px";
    hill4.style.left = value * -1.5 + "px";
    hill1.style.top = value * 1 + "px";
  });
}

// ************************************************

var animationElements = document.querySelectorAll(".slide");
var windowElement = window;

function checkIfInView() {
  var windowHeight = windowElement.innerHeight;
  var windowTopPosition = windowElement.scrollY;
  var windowBottomPosition = windowTopPosition + windowHeight;

  animationElements.forEach(function (element) {
    var elementHeight = element.offsetHeight;
    var elementTopPosition = element.offsetTop;
    var elementBottomPosition = elementTopPosition + elementHeight;

    if (
      elementBottomPosition >= windowTopPosition &&
      elementTopPosition <= windowBottomPosition
    ) {
      element.classList.add("hasSlid");
    } else {
      element.classList.remove("hasSlid");
    }
  });
}

windowElement.addEventListener("scroll", checkIfInView);
windowElement.addEventListener("resize", checkIfInView);

var animatedElement = document.querySelector(".slide");

if (animatedElement) {
  // animatedElement.style.marginLeft = "100px";
  animatedElement.style.transition = "margin-left 1s";

  setTimeout(function () {
    animatedElement.style.opacity = "1";
  }, 1500);
}

// ***********************************************************

(function (document, window, $) {
  $(document).ready(function () {
    var windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      $menu = $(".menu");

    function menuAnchors() {
      var pageDirection = "";
      var thisElement;
      var reverseDirection;
      var timeout;
      $menu.find("nav li a").click(function (event) {
        event.preventDefault();
        $(".cubec").removeClass("reverse-" + pageDirection);
        thisElement = $(this);
        pageDirection = thisElement.data("direction");
        reverseDirection = thisElement.data("reverse-direction");
        thisElement
          .parent()
          .addClass("active")
          .siblings()
          .removeClass("active");
        $(".cubec").addClass("reverse-" + pageDirection);

        $menu.addClass("go-out");
        $("#wrap").addClass("active");
        clearTimeout(timeout);
        timeout = setTimeout(function () {
          $menu.removeClass("go-out");
          $("#wrap").removeClass("active");
        }, 1000);
      });
    }
    menuAnchors();
    $(window).resize(function () {
      windowWidth = $(window).width();
      windowHeight = $(window).height();
    });
  });
})(document, window, jQuery);

// ***********************************************************

$(".button-flash").on("click", function () {
  $(".box").toggleClass("animated");
});


document.getElementById("button1").addEventListener("click", function () {
  document.querySelector(".first").classList.remove("hidden");
  document.querySelector(".second").classList.add("hidden");
});

document.getElementById("button2").addEventListener("click", function () {
  document.querySelector(".first").classList.add("hidden");
  document.querySelector(".second").classList.remove("hidden");
});

document.getElementById("button1").click();