const menu = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".navlink");
const buttonMenu = document.querySelector(".button-menu");
const openIcon = document.querySelector(".openIcon");
const closeIcon = document.querySelector(".closeIcon");




function toggleMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
  } else {
    menu.style.display = "block";
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
  }
}

function closeMenu(e){
  if (!menu.contains(e.target)&& !buttonMenu.contains(e.target)){
    menu.style.display = "none";
    closeIcon.style.display="none"
    openIcon.style.display="block"
  }
}


buttonMenu.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu)
document.addEventListener("click", closeMenu)


// carousel list berita
const cardWrapper = document.querySelector(".card-wrapper");

let isDragging = false;
let startX;

const startDrag = (e) => {
  isDragging = true;
  startX = e.touches[0].pageX;
};

const dragging = (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].pageX;
  const diffX = currentX - startX;
  cardWrapper.scrollLeft -= diffX;
  startX = currentX;
};

const stopDrag = () => {
  isDragging = false;
};

cardWrapper.addEventListener("touchstart", startDrag);
cardWrapper.addEventListener("touchmove", dragging);
cardWrapper.addEventListener("touchend", stopDrag);