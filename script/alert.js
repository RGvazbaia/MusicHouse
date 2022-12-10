function alertbutton() {
  let x = document.querySelector("#borderdiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

let xclose = document.querySelector(".xclass");

xclose.addEventListener("click", btclose);
function btclose() {
  let borderclass = document.querySelector("#borderdiv");
  borderclass.style.display = "none";
}
