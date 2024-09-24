let bookContentRef = document.getElementById("book_content");

function init() {
  renderBooks();
  getFromLocalStorage();
}

function renderBooks() {
  getFromLocalStorage();
  bookContentRef = document.getElementById("book_content");
  bookContentRef.innerHTML = "";
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    bookContentRef.innerHTML += getBookTemplate(indexBook);
    let commentContentRef = document.getElementById(`comments${indexBook}`);
    for (let index = 0; index < books[indexBook].comments.length; index++) {
      commentContentRef.innerHTML += `<div>${books[indexBook].comments[index].name}: ${books[indexBook].comments[index].comment}</div>`;
    }
    commentContentRef.innerHTML += `<div class=comment.area><input id="comment-input${indexBook}"" type="text" required></input><button class=button" onclick="addComment(${indexBook})">Kommentar senden</button></div`;
    liked(indexBook);
  }
}

function likes(bookIndex) {
  if (books[bookIndex].liked == false) {
    books[bookIndex].likes++;
    books[bookIndex].liked = true;
  } else {
    books[bookIndex].likes--;
    books[bookIndex].liked = false;
  }
  saveToLocalStorage();
  renderBooks();
  liked(bookIndex);
}

function liked(bookIndex) {
  if (books[bookIndex].liked == true) {
    let currentPicture = document.getElementById(`picture${bookIndex}`);
    currentPicture.src = "./assets/svg/heart1.svg";
  } else {
    currentPicture = document.getElementById(`picture${bookIndex}`);
    currentPicture.src = "./assets/svg/heart2.svg";
  }
}

function addComment(bookIndex) {
  let commentInputRef = document.getElementById(`comment-input${bookIndex}`);
  let commentInput = commentInputRef.value;
  if (commentInput !== "") {
    books[bookIndex].comments.push({
      name: "Kunde",
      comment: commentInput,
    });
  }
  saveToLocalStorage();
  renderBooks();
}

function saveToLocalStorage() {
  localStorage.setItem("myComments", JSON.stringify(books));
}

function getFromLocalStorage() {
  let commentsFromStorage = JSON.parse(localStorage.getItem("myComments"));
  if (commentsFromStorage != null) {
    books = commentsFromStorage;
  }
}

/*bookContentRef.addEventListener("wheel", (event) => {
  event.preventDefault();
  bookContentRef.scrollLeft += event.deltaY * 5;
});*/
