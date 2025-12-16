let allBooks = {
    'books' : [],
};

function renderBooks() {
    let contentRef = document.getElementById('book_content');
    contentRef.innerHTML = "";

    for (let indexBooks = 0; indexBooks < allBooks.books.length; indexBooks++) {
        contentRef.innerHTML += getBookTamplate(indexBooks);
    }
}