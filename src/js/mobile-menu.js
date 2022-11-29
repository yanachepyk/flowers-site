(() => {
    const refs = {
      openMobileMenuBtn: document.querySelector('[data-mobile-menu-open]'),
      closeMobileMenuBtns: document.querySelectorAll('[data-mobile-menu-close]'),
      mobileMenu: document.querySelector('[data-mobile-menu]'),
    };
  
    refs.openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
    refs.closeMobileMenuBtns.forEach((closeBtn) => {
        closeBtn.addEventListener('click', toggleMobileMenu);
    });
  
    function toggleMobileMenu() {
      refs.mobileMenu.classList.toggle('is-menu-hidden');
      const scrollLockMethod = !refs.mobileMenu.classList.contains('is-menu-hidden')
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
    }
  })();