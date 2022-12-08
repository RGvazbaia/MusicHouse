let navigationBlock = document.getElementById("navigationWraper");
let burgerBarBlock = document.getElementById("burger-Bar");

burgerBarBlock.addEventListener("click", function () {
  navigationBlock.classList.toggle("navActive");
});
