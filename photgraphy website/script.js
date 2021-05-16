const nav_links = document.querySelector('.nav_links');
const hamb = document.getElementById('hamb');


hamb.addEventListener('click',(e)=>{
	e.preventDefault();
	nav_links.classList.toggle('active');
})