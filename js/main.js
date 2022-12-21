const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const navbar = document.querySelector('.nav__ul');

btnOpen.addEventListener('click', () => {
    navbar.classList.add('nav__ul-active');
    btnOpen.style.display = 'none';
    btnClose.style.display = 'inline-block';
});

btnClose.addEventListener('click', () => {
    navbar.classList.remove('nav__ul-active');
    btnOpen.style.display = 'inline-block';
    btnClose.style.display = 'none';
});