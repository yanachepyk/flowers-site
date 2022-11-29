(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-1]'),
    closeModalBtn: document.querySelector('[data-modal-close-1]'),
    sendModalBtn: document.querySelector('[data-modal-send-1]'),
    modal: document.querySelector('[data-modal-1]'),
    form: document.querySelector('form[name=modal-1-form]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(event) {
    event.preventDefault();

    refs.modal.classList.toggle('is-hidden');

    // const scrollLockMethod = !refs.modal.classList.contains('is-hidden')
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  }

  function sendModal(event) {
    event.preventDefault();

    if (
      refs.sendModalBtn.classList.contains('modal-button-diabled') === false
    ) {
      refs.modal.classList.toggle('is-hidden');
      refs.form.reset();
      refs.sendModalBtn.classList.add('modal-button-diabled');
    }
  }

  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.sendModalBtn.addEventListener('click', sendModal);

  const textInput = document.querySelector('.modal-subscribe__form-input');

  textInput.addEventListener('input', checkForm);

  function checkForm() {
    const email = document.querySelector('input#modal-subscribe-email');

    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value !== '' && email.value.match(validEmail)) {
      refs.sendModalBtn.classList.remove('modal-button-diabled');
    } else {
      refs.sendModalBtn.classList.add('modal-button-diabled');
    }

    if (email.value !== '' && !email.value.match(validEmail)) {
      email.classList.add('modal__form-input--required');
    } else {
      email.classList.remove('modal__form-input--required');
    }
  }
})();
