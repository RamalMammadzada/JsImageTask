document.querySelectorAll(".photo-container img").forEach((image) => {
  image.addEventListener("click", function () {
    document.querySelector(".bigPhoto").style.display = "block";
    document.querySelector(".bigPhoto img").src = image.getAttribute("src");
  });
});
