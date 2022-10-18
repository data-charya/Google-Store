let height = window.innerHeight;
let scroll = document.getElementById("scroll-box");

if (height <= 960) {
  document.getElementById("ham").classList.remove("hide");
} else {
  document.getElementById("ham").classList.add("hide");
}
