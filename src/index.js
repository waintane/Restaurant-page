import { changement } from './carousel';

//declaration
let burgerButton ={
    object : document.querySelector(".navigation-burger-button svg"),
    active : false,
}
let menuBurger = {
    object : document.querySelector(".menu"),
}

setInterval(changement, 4000);
setInterval(ajustement, 1000);

function ajustement(){
    if(window.screen.width >= 1200){
        menuBurger.object.setAttribute('style', 'left: 0%');
        burgerButton.active = true;
    }
}


burgerButton.object.addEventListener("click", () => {

    if(burgerButton.active === false && window.screen.width < 1200){
        burgerButton.object.classList.add("rotate");
        menuBurger.object.setAttribute('style', 'left: 0%');
        burgerButton.active = true;
    }
    else if(burgerButton.active === true && window.screen.width < 1200){
        burgerButton.object.classList.remove("rotate");
        menuBurger.object.setAttribute('style', 'left: -110%');
        burgerButton.active = false;
    }
});


// // loop through slides and set each slides translateX property to index * 100% 
// slides.forEach((slide, base) => {
//     //slide.style.transform = `translateX(${base * 100}%)`;
//   });
