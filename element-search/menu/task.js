const menuElem = document.querySelectorAll('ul.menu_main > li');
const menuValve = menuElem.length;

for (let i = 0; i < menuValve; i++ ) {
    menuElem.item(i).addEventListener('click', function(event) {
        let menuActive = document.querySelector('.menu_active');
        let menuSub = this.querySelector('ul.menu_sub');

        if (!event.target.getAttribute('href')) {
            event.preventDefault();
          }  
              
            if (menuSub === menuActive && menuActive) {
                menuActive.classList.remove('menu_active');
    
            return;
            }

        if (menuSub) {

            if (menuActive) {
              menuActive.classList.remove('menu_active');          
            }
            
            menuSub.classList.add('menu_active');
            
            return;
          }
      
          return;
        });
}