const refs = {
  burgerMenu: document.querySelector('.header__burger-menu'),
  modalWindow: document.querySelector('.modal_window_backdrop'),
  close: document.querySelector('.backdrop__close--btn'),
  link: document.querySelector('.modal_link'),
};

refs.burgerMenu.addEventListener('click', () => {
  refs.modalWindow.classList.add('show');
});

refs.close.addEventListener('click', () => {
  refs.modalWindow.classList.remove('show');
});

refs.link.addEventListener('click', () => {
  console.log('link');
  refs.modalWindow.classList.remove('show');
});
