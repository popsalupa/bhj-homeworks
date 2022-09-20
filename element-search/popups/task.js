
const modalWindow = document.getElementById('modal_main');
modalWindow.classList.add('modal_active');

const modalButton = document.getElementsByClassName('modal__close');
const successElement = document.getElementById('modal_success');

const closeButton = modalButton.item(0);
const successButton = modalButton.item(1);
const successCloseButton = modalButton.item(2);
const btnSuccess = document.getElementsByClassName('btn_success').item(0);

function closeModal () {
  modalWindow.classList.remove('modal_active');
}

function openModal() {
  closeModal();
  successElement.classList.add('modal_active');
}

successButton.onclick = openModal;
closeButton.onclick = closeModal;

function successClose() {
  successElement.classList.remove('modal_active');
}

successCloseButton.onclick = successClose;
btnSuccess.onclick = successClose;