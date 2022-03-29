(() => {
  const mobileMenu = document.querySelector('[data-menu]');
  const openMenuBtn = document.querySelector('[open-menu-button]');
  const closeMenuBtn = document.querySelector('[close-menu-button]');

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    document.body.classList.toggle('menu-open');
    mobileMenu.classList.toggle('is-hidden');
  }
})();