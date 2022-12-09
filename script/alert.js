function alertbutton() {
    let x = document.querySelector("#borderdiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

  } 
  


let xclose = document.querySelector(".xclass");

xclose.addEventListener("click", btclose);
function btclose(){
let borderclass = document.querySelector("#borderdiv");
borderclass.style.display = "none";
}
