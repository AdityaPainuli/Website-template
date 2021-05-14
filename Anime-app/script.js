const homeapi = 'https://api.jikan.moe/v3/top/anime';
const searchapi = 'https://api.jikan.moe/v3/search/anime?q=';
const action_genre = 'https://api.jikan.moe/v3/genre/anime/1/1';
const adventure_genre = 'https://api.jikan.moe/v3/genre/anime/2/1';
const comedy_genre = 'https://api.jikan.moe/v3/genre/anime/4/1';
const mystery_genre = 'https://api.jikan.moe/v3/genre/anime/7/1';
const drama_genre = 'https://api.jikan.moe/v3/genre/anime/8/1';

// DOM ELements
const cards = document.querySelector('.cards');
const action = document.getElementById('action');
const adventure = document.getElementById('adventure');
const comedy = document.getElementById('comedy');
const mystery = document.getElementById('mystery');
const drama = document.getElementById('drama');
const form = document.getElementById('form');
const hamb = document.getElementById('hamb');
const nav = document.querySelector('.nav_links');
const logo = document.querySelector('.logo');

hamb.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('active');
    logo.classList.toggle('dark');
    hamb.classList.toggle('dark');

})

async function getdata(url) {
    const response = await fetch(url);
    const result = await response.json();
    cards.innerHTML = '';
    try {
        result.top.forEach(anime => {

            const divEl = document.createElement('div');
            divEl.classList.add('card');
            divEl.innerHTML = ` <img
                src="${anime.image_url}"
                alt="${anime.title}"
              />
              <div class="info">
                <h1>${anime.title}</h1>
              </div>`;
            cards.appendChild(divEl);
        });
    } catch (e) {
        console.log(e);
    }


}

action.addEventListener('click', (e) => {
    e.preventDefault();
    getgenre(action_genre);
});
adventure.addEventListener('click', (e) => {
    e.preventDefault();
    getgenre(adventure_genre);
});
comedy.addEventListener('click', (e) => {
    e.preventDefault();
    getgenre(comedy_genre);
});
mystery.addEventListener('click', (e) => {
    e.preventDefault();
    getgenre(mystery_genre);
});
drama.addEventListener('click', (e) => {
    e.preventDefault();
    getgenre(drama_genre);
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    var search_input = document.getElementById('searchInput').value;
    document.getElementById('searchInput').value = '';
    getsearch(searchapi + search_input);
})

async function getgenre(url) {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    cards.innerHTML = '';
    try {
        result.anime.forEach(anime => {

            const divEl = document.createElement('div');
            divEl.classList.add('card');
            divEl.innerHTML = ` <img
                src="${anime.image_url}"
                alt="${anime.title}"
              />
              <div class="info">
                <h1>${anime.title}</h1>
              </div>`;
            cards.appendChild(divEl);
        });
    } catch (e) {
        console.log(e);
    }
}

async function getsearch(url) {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    cards.innerHTML = '';
    try {
        result.results.forEach(anime => {

            const divEl = document.createElement('div');
            divEl.classList.add('card');
            divEl.innerHTML = ` <img
                src="${anime.image_url}"
                alt="${anime.title}"
              />
              <div class="info">
                <h1>${anime.title}</h1>
              </div>`;
            cards.appendChild(divEl);
        });
    } catch (e) {
        console.log(e);
    }
}


getdata(homeapi);


