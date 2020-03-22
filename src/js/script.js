
let leftgear = document.getElementById("gear_left1"),
    rightgear = document.getElementById("gear_right1");
  

window.addEventListener("scroll", function() {
  leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
  rightgear.style.transform = "rotate(-"+window.pageYOffset+"deg)";
});
