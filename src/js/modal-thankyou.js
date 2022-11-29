(() => {
  const refs = {
    openModalThankyouBtn: document.querySelector('[data-modal-open-store]'),
    closeModalBtn: document.querySelector('[data-modal-close-store]'),
    modal: document.querySelector('[data-modal-store]'),
    modalThankyou: document.querySelector('[data-modal-open-thankyou]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modalThankyou.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
