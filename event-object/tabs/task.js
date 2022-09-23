let menuArr =[];
const menuTab = document.querySelectorAll('div.tab__navigation > div');
const contentTab = document.querySelectorAll('div.tab__contents > div');
const menuLength = menuTab.length;

for (let i = 0; i < menuLength; i++) {
    menuArr.push(menuTab[i].innerText);
}

for ( let i = 0; i < menuLength; i++) {
    menuTab[i].addEventListener('click', function(event) {
        let tabActive = document.querySelector('.tab_active');
        let contentActive = document.querySelector('.tab__content_active')

        if ( tabActive.innerText != event.target.innerText) {
            tabActive.classList.remove('tab_active');
            contentActive.classList.remove('tab__content_active');
            event.target.classList.add('tab_active');

            let array = menuArr.indexOf(event.target.innerText);
            contentTab[array].classList.add('tab__content_active');
        }
    });
}