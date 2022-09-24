const rotatorCase = document.querySelectorAll('span.rotator > .rotator__case');
let activeToggle = true;

function rotatorToggle() {
    const currentWord =document.querySelector('.rotator__case_active');
    let nextWord = currentWord.nextElementSibling;

    if (activeToggle) {
        activeToggle = false;
    } 
    if (nextWord) {
        Element = nextWord
    } else {
        Element =rotatorCase[0];
    }
    timeOut = Element.getAttribute('data-speed');
    currentWord.classList.remove('rotator__case_active');
    Element.classList.add('rotator__case_active');

}

setInterval(() => rotatorToggle(), 200);