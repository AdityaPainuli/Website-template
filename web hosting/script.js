const navul = document.querySelector('.nav_links');
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', (e) => {
    navul.classList.toggle('active');
});