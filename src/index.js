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

burgerButton.object.addEventListener("click", () => {
    if(burgerButton.active === false){
        burgerButton.object.classList.add("rotate");
        menuBurger.object.setAttribute('style', 'left: 0%');
        burgerButton.active = true;
    }
    else{
        burgerButton.object.classList.remove("rotate");
        menuBurger.object.setAttribute('style', 'left: -100%');
        burgerButton.active = false;
    }
});

// // loop through slides and set each slides translateX property to index * 100% 
// slides.forEach((slide, base) => {
//     //slide.style.transform = `translateX(${base * 100}%)`;
//   });
