function getBookTemplate(index) {
  return /*html*/ `
    <div class="book">
        <h1>${books[index].name}</h1>
        <div class="separator" ></div>
        <div class="price-and-like">
            <p>Preis: ${books[index].price}€</p>
            <p class="like">${
              books[index].likes
            } <img class="heart" onclick="likes(${index})" id="${
    "picture" + index
  }" src="./assets/svg/heart1.svg" alt="Ein Herz"></p>
        </div>
        <div>
        <p class="autor">Autor: ${books[index].author}</p>
        <p class="jahr">Jahr: ${books[index].publishedYear}</p>
        <p class="genre">Genre: ${books[index].genre}</p>
        </div>
        <div class="separator" ></div>
        <div id="${"comments" + index}">
            <p>Kommentare:</p>
        </div>
    </div>
    `;
}
