const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=69528584775ce9f16f2c2d34f469ef83&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=69528584775ce9f16f2c2d34f469ef83&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = ''; // clear page after search so new movies aren't added to old list

  movies.forEach((movie) => { // looping through movies in search results
    const { title, poster_path, vote_average, overview } = movie;  // destructuring

    const movieEl = document.createElement('div'); // creating div for movies in search results
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `;
    main.appendChild(movieEl); // appending to main
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => { // listening for a "submit" then (e) is the event to happen
  e.preventDefault();

  const searchTerm = search.value; // get value of search

  if (searchTerm && searchTerm !== '') { // if searchTerm exists and is not equal to an empty string
    getMovies(SEARCH_API + searchTerm);  // then we will call getMovies and find the SEARCH_API value, which is a url, and add the search term to end

    search.value = '';  // then clear the search value
  } else {
    window.location.reload(); // window is reloaded
  }
});