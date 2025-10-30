(function () {
  const navToggle = document.querySelector('.cw-nav-toggle');
  const primaryNav = document.querySelector('.cw-primary-nav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      primaryNav.classList.toggle('is-open');
    });
  }

  const navItems = document.querySelectorAll('.cw-primary-nav .cw-nav-item.has-children > .cw-nav-link');
  navItems.forEach((link) => {
    link.addEventListener('click', function (event) {
      if (window.innerWidth <= 768) {
        event.preventDefault();
        const parent = link.parentElement;
        parent.classList.toggle('open');
      }
    });
  });
})();
