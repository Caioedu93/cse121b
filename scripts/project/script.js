/* Declare and initialize global variables */
const charactersElement = document.querySelector("#characters");
const booksElement = document.querySelector("#books");
const moviesElement = document.querySelector("#movies");
const potionsElement = document.querySelector("#potions");

const characterList = [];
const bookList = [];
const movieList = [];
const potionList = [];

/* async displayCharacters Function */
const displayCharacters = (characters) => {
  characters.forEach((character) => {
    // Create an HTML <article> element
    const article = document.createElement("article");

    // Create an HTML <h3> element and add the character's name property
    const h3 = document.createElement("h3");
    h3.textContent = character.attributes.name;

    // Create an HTML <a> element for the character's Wiki link
    const wikiLink = document.createElement("a");
    wikiLink.href = character.attributes.wiki;
    wikiLink.textContent = "Wiki Page";
    wikiLink.target = "_blank"; // Open the link in a new tab

    // Append the <h3> and <a> elements to the <article> element
    article.appendChild(h3);
    article.appendChild(wikiLink);

    // Append the <article> element to the charactersElement
    charactersElement.appendChild(article);
  });
};

/* async displayBooks Function */
const displayBooks = (books) => {
  books.forEach((book) => {
    // Create an HTML <article> element
    const article = document.createElement("article");

    // Create an HTML <h3> element and add the book's title property
    const h3 = document.createElement("h3");
    h3.textContent = book.attributes.title;

    // Create an HTML <a> element for the book's Wiki link
    const wikiLink = document.createElement("a");
    wikiLink.href = book.attributes.wiki;
    wikiLink.textContent = "Wiki Page";
    wikiLink.target = "_blank"; // Open the link in a new tab

    // Append the <h3> and <a> elements to the <article> element
    article.appendChild(h3);
    article.appendChild(wikiLink);

    // Append the <article> element to the booksElement
    booksElement.appendChild(article);
  });
};

/* async displayMovies Function */
const displayMovies = (movies) => {
  movies.forEach((movie) => {
    // Create an HTML <article> element
    const article = document.createElement("article");

    // Create an HTML <h3> element and add the movie's title property
    const h3 = document.createElement("h3");
    h3.textContent = movie.attributes.title;

    // Create an HTML <a> element for the movie's Wiki link
    const wikiLink = document.createElement("a");
    wikiLink.href = movie.attributes.wiki;
    wikiLink.textContent = "Wiki Page";
    wikiLink.target = "_blank"; // Open the link in a new tab

    // Append the <h3> and <a> elements to the <article> element
    article.appendChild(h3);
    article.appendChild(wikiLink);

    // Append the <article> element to the moviesElement
    moviesElement.appendChild(article);
  });
};

/* async displayPotions Function */
const displayPotions = (potions) => {
  potions.forEach((potion) => {
    // Create an HTML <article> element
    const article = document.createElement("article");

    // Create an HTML <h3> element and add the potion's name property
    const h3 = document.createElement("h3");
    h3.textContent = potion.attributes.name;

    // Create an HTML <a> element for the potion's Wiki link
    const wikiLink = document.createElement("a");
    wikiLink.href = potion.attributes.wiki;
    wikiLink.textContent = "Wiki Page";
    wikiLink.target = "_blank"; // Open the link in a new tab

    // Append the <h3> and <a> elements to the <article> element
    article.appendChild(h3);
    article.appendChild(wikiLink);

    // Append the <article> element to the potionsElement
    potionsElement.appendChild(article);
  });
};

/* async getCharacters Function using fetch() */
const getCharacters = async () => {
  try {
    const response = await fetch("https://api.potterdb.com/v1/characters");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    characterList.length = 0; // Clear the characterList array
    characterList.push(...data.data);
    displayCharacters(characterList);
  } catch (error) {
    console.error("Error fetching character data:", error);
  }
};

/* async getBooks Function using fetch() */
const getBooks = async () => {
  try {
    const response = await fetch("https://api.potterdb.com/v1/books");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    bookList.length = 0; // Clear the bookList array
    bookList.push(...data.data);
    displayBooks(bookList);
  } catch (error) {
    console.error("Error fetching book data:", error);
  }
};

/* async getMovies Function using fetch() */
const getMovies = async () => {
  try {
    const response = await fetch("https://api.potterdb.com/v1/movies");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    movieList.length = 0; // Clear the movieList array
    movieList.push(...data.data);
    displayMovies(movieList);
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
};

/* async getPotions Function using fetch() */
const getPotions = async () => {
  try {
    const response = await fetch("https://api.potterdb.com/v1/potions");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    potionList.length = 0; // Clear the potionList array
    potionList.push(...data.data);
    displayPotions(potionList);
  } catch (error) {
    console.error("Error fetching potion data:", error);
  }
};

/* reset Functions */
const resetCharacters = () => {
  charactersElement.innerHTML = ''; // Clear the displayed list of characters
};

const resetBooks = () => {
  booksElement.innerHTML = ''; // Clear the displayed list of books
};

const resetMovies = () => {
  moviesElement.innerHTML = ''; // Clear the displayed list of movies
};

const resetPotions = () => {
  potionsElement.innerHTML = ''; // Clear the displayed list of potions
};

/* Event Listeners */
document.querySelector("#charactersButton").addEventListener("click", () => {
  resetBooks();
  resetMovies();
  resetPotions();
  getCharacters();
});

document.querySelector("#booksButton").addEventListener("click", () => {
  resetCharacters();
  resetMovies();
  resetPotions();
  getBooks();
});

document.querySelector("#moviesButton").addEventListener("click", () => {
  resetCharacters();
  resetBooks();
  resetPotions();
  getMovies();
});

document.querySelector("#potionsButton").addEventListener("click", () => {
  resetCharacters();
  resetBooks();
  resetMovies();
  getPotions();
});


