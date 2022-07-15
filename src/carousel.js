const slides = document.querySelectorAll(".slide");

let overall = (slides.length -1);
let selection = 0;
let preSelection;

function changement(){
    if(selection > 0){
        slides[preSelection].setAttribute('style', 'z-index:1');
    }
    slides[selection].setAttribute('style', 'z-index: 10');

    selection++;
    preSelection = (selection - 1);

    if(selection > overall){
        selection = 0;  
        slides[overall].setAttribute('style', 'z-index: 1');   
    }  
}

export { changement };