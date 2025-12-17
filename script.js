const YOUR_NAME = "Asgar";
const likeIconURL = "./assets/icons/like.png";
const STORAGE_KEY = 'bookstoreData';

getFromLocalStorage();

// Funktion zum Rendern aller Bücher
function renderBooks() {
    const bookListContainer = document.getElementById('book-list');
    bookListContainer.innerHTML = '';

    for (let index = 0; index < books.length; index++) {
        let book = books[index];
        let bookElement = createBookElement(book, index);
        bookListContainer.appendChild(bookElement);
    }
}

// Like-Status eines Buches ändern
function toggleLike(index) {
    if (books[index].liked) {
        books[index].likes -= 1;
        books[index].liked = false;
    }
    else {
        books[index].likes += 1;
        books[index].liked = true;
    }

    saveToLocalStorage();
    renderBooks();
}

// Einen neuen Kommentar hinzufügen
function addComment(index) {
    let inputRef = document.getElementById('comment-input-' + index);
    let commentText = inputRef.ariaValueMax.trim();

    if (commentText === "") {
        alert("Bitte gib einen Kommentar ein Meister.");
        return;
    }

    let newComment = {
        "name": YOUR_NAME,
        "comment": commentText
    };

    books[index].comments.push(newComment);

    saveToLocalStorage();
    renderBooks();
}



renderBooks();