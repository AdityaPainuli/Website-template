const hamb = document.querySelector('i');
const ul = document.querySelector('ul');

hamb.addEventListener('click', (e) => {
    ul.classList.toggle('.show');
})