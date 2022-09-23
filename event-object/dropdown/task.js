const dropdownList = document.querySelector('.dropdown__value');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const dropdownActive = document.querySelector('ul.dropdown__list');
const listLength = dropdownItem.length;

dropdownList.onclick = function() {
  dropdownActive.classList.toggle('dropdown__list_active');
}

for (let i = 0; i < listLength; i++) {
  dropdownItem[i].addEventListener('click', function(event) {
    event.preventDefault();
    dropdownList.textContent = event.target.textContent;
    dropdownActive.classList.remove('dropdown__list_active');
  });
}