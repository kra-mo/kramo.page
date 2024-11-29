document.querySelectorAll(".js-disabled").forEach((element) => {
  element.classList.remove("js-disabled");
});

const images = document.querySelectorAll(".carousel-image");
let currentIndex = 0;

images.forEach((image) => {
  image.classList.remove("show");
  image.style.display = "none";
});

images[currentIndex].classList.add("show");
images[currentIndex].style.display = "block";

function switchCarousel(next) {
  images[currentIndex].classList.remove("show");
  images[currentIndex].style.display = "none";

  if (next)
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  else currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;

  images[currentIndex].style.display = "block";
  setTimeout(() => {
    images[currentIndex].classList.add("show");
  }, 10);
}

function showContent(contentId) {
  Array.from(document.getElementById("os-content").children).forEach(
    (content) => {
      content.classList.remove("show");
      content.style.display = "none";
    },
  );

  const selectedContent = document.getElementById(contentId);
  selectedContent.style.display = "block";
  setTimeout(() => {
    selectedContent.classList.add("show");
  }, 10);

  document.querySelectorAll("#os-buttons > button").forEach((button) => {
    button.setAttribute("aria-pressed", "false");
  });
  document
    .querySelector(`#os-buttons > button[onclick*="${contentId}"]`)
    .setAttribute("aria-pressed", "true");
}

switch (window.navigator.platform) {
  case "Linux armv81":
    showContent("android");
    break;
  case "Linux x86_64":
    showContent("linux");
    break;
  case "MacIntel":
    showContent("apple");
    break;
  case "Win32":
    showContent("windows");
    break;
  default:
    showContent("android");
    break;
}
