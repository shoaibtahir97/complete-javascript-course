(function () {
  const heading = document.querySelector("h1");
  heading.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    heading.style.color = "blue";
  });
})();
