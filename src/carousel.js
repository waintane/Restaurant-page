const slides = [document.querySelectorAll(".slide")];

let selection = 0;

function changement(){
    
    const overall = (slides.length -1);
    // slides[selection].setAttribute('style', 'z-index: 10');
    // slides[selection -1].setAttribute('style', 'z-index: 0');
    selection += 1;
    // if(selection >= overall){
    //     selection = 0;
    //     slides[overall].setAttribute('style', 'z-index: 0');
    // }
    console.log(selection);
}

export { changement };