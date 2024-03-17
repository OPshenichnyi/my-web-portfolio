const refs = {
  burgerMenu: document.querySelector('.header__burger-menu'),
  modalWindow: document.querySelector('.modal_window_backdrop'),
};

refs.burgerMenu.addEventListener('click', () => {
  console.log('hi');
  refs.modalWindow.classList.add('show');
});

refs.modalWindow.addEventListener('click', () => {
  refs.modalWindow.classList.remove('show');
});
