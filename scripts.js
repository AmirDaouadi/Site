let movementbutton = document.getElementById("movement");
let menu = document.getElementById("navmenu");
let links = document.getElementById("navlinks");
let menuopened = false;

movementbutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
menu.addEventListener("click", () => {
    menuopened = !menuopened;

    if(menuopened){
        links.style.right = "0";  
        menu.className = "cross";
}else{

  links.style.right = "-110%";  
  menu.className = "burger";
    }
      });

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    movementbutton.style.bottom = "20px";
  else
    movementbutton.style.bottom = "-50px";

};



if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  movementbutton.style.bottom = "20px";
else
  movementbutton.style.bottom = "-50px";

