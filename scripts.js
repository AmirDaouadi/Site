let movementbutton = document.getElementById("movement");
let menu = document.getElementById("navmenu");
let menuopened = false;

movementbutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
menu.addEventListener("click", () => {
    menuopened = !menuopened;
    console.log("opened",menuopened);
    if(menuopened) {
        menu.className = "navmenucross";
    } else {
        menu.className = "";
    }
});

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    movementbutton.style.bottom = "20px";
  } else {
    movementbutton.style.bottom = "-50px";
  }
};

if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  movementbutton.style.bottom = "20px";
} else {
  movementbutton.style.bottom = "-50px";
}
