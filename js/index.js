//1
const navChange = document.querySelector(".nav");

navChange.addEventListener("mouseover", (event) => {
  event.target.style.color = "red";
});

//2
const picture = document.querySelector(".content-section img");
window.addEventListener("resize", () => {
  picture.src =
    "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";
});

//3
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.body.innerHTML = "";
    window.confirm("SELF-DESTRUCTING!!!!!!!!!!!!");
  }
});

//4
const imageOne = document.querySelector(".intro img");
imageOne.addEventListener("dblclick", () => {
  imageOne.style.border = "50px solid black";
});

//5
const header = document.querySelector(".footer");
header.addEventListener("focus", () => {
  header.style.backgroundColor = "pink";
});

//6
const para = document.querySelectorAll("p");
para.forEach((item) => {
  item.addEventListener("wheel", () => {
    item.style.color = "yellow";
  });
});

//7
window.addEventListener("load", () => {
  alert("Page is fully loaded");
});

//8
const scroller = document.querySelector("body");
window.addEventListener("scroll", () => {
  scroller.style.backgroundColor = "lightblue";
});

//9
const navClick = document.querySelector("header");
navClick.addEventListener("click", () => {
  navClick.style.color = "green";
});

//10
const imageThree = document.querySelector(".content-destination img");
imageThree.addEventListener("mouseover", () => {
  imageThree.style.transform = "scale(2.5)";
});

imageThree.addEventListener("mouseleave", () => {
  imageThree.style.transform = "scale(1.0)";
});
