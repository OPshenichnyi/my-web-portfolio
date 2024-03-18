(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mobile-open]'),
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    modal: document.querySelector('[data-mobile]'),
    linkCloseModal: document.querySelectorAll('[data-link]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.linkCloseModal.forEach(element => {
    element.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('mobile-hidden');
  }
})();
