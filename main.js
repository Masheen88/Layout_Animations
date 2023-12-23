// Checks if the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const images = gallery.querySelectorAll("img");
  const leftArrow = document.querySelector(".leftArrow");
  const rightArrow = document.querySelector(".rightArrow");

  // Disable dragging of images
  images.forEach((img) => {
    img.addEventListener("dragstart", (e) => e.preventDefault());
  });

  // Function to move to the next image
  function moveToNextImage() {
    gallery.scrollLeft += gallery.clientWidth;
  }

  // Function to move to the previous image
  function moveToPreviousImage() {
    gallery.scrollLeft -= gallery.clientWidth;
  }

  // Event listener for the right arrow click
  rightArrow.addEventListener("click", moveToNextImage);

  // Event listener for the left arrow click
  leftArrow.addEventListener("click", moveToPreviousImage);

  let isDown = false;
  let startX;
  let scrollLeft;

  // Checks if the mouse is down on the gallery
  gallery.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
  });

  // Checks if the mouse is up on the gallery
  gallery.addEventListener("mouseleave", () => {
    isDown = false;
  });

  // Checks if the mouse is up on the gallery
  gallery.addEventListener("mouseup", () => {
    isDown = false;
  });

  // Checks if the mouse is moving on the gallery
  gallery.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    gallery.scrollLeft = scrollLeft - walk;
  });
});
