//declaration
let burgerButton ={
    object : document.querySelector(".navigation-burger-button svg"),
    active : false,
}


burgerButton.object.addEventListener("click", () => {
    if(burgerButton.active === false){
        burgerButton.object.classList.add("rotate");
        burgerButton.active = true;
    }
    else{
        burgerButton.object.classList.remove("rotate");
        burgerButton.active = false;
    }
})