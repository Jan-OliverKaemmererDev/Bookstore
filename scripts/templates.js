function createBookElement(book, index) {
    const card = document.createElement('div');
    card.classList.add('book-card');

    card.innerHTML = `
        <img src="./assets/icons/book.png" alt="${book.name}" class="book-cover">
        <div class="book-info">
            <h2>${book.name}</h2>
            <p><strong>Autor:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Veröffentlicht:</strong> ${book.publishedYear}</p>
            <p><strong>Preis:</strong> ${book.price.toFixed(2)} <img src="./assets/icons/coin.png" alt="Gold" class="currency-icon"></p>
            
            <div class="like-section">
                <img src="${likeIconURL}" alt="Like" class="like-icon ${book.liked ? 'liked' : ''}" 
                onclick="toggleLike(${index})">
                <span class="like-count">${book.likes}</span> Likes
            </div>

            <h3>Kommentare:</h3>
            <div class="comments-box" id="comments-${index}">
                ${renderCommentsTemplate(book.comments)}
            </div>

            <div class="comment-input-section">
                <input type="text" id="comment-input-${index}" placeholder="Dein Kommentar...">
                <img src="./assets/icons/send.png" alt="Senden" class="send-icon" 
                onclick="addComment(${index})">
            </div>
        </div>
    `;

    return card;
}

function renderCommentsTemplate(comments) {
    let html = '';
    for (let i = 0; i < comments.length; i++) {
        html += '<p><strong>' + comments[i].name + ':</strong> ' + comments[i].comment + '</p>';
    }
    return html;
}