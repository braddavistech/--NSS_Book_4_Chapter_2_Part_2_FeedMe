const audrey = document.getElementById("audrey")

document.addEventListener("scroll", function () {

   audrey.style.width = window.scrollY / 3 + "px";
   audrey.style.height = window.scrollY / 3 + "px";

});