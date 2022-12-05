/* global */

let myLibrary = [];
let bookTitle = document.querySelector(".title");
let bookAuthor = document.querySelector(".author");
let bookPages = document.querySelector(".pages");
let bookRead = document.querySelector(".read");
let cardContainer = document.querySelector(".card-container");
let cards = document.querySelectorAll(".card");
let checkbox = document.getElementById('read');

let bookCounter = 0;
let haveRead = "";

/* functions */

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return;
};

function readCheck() {
    if (checkbox.checked != true) {
        haveRead = "Not Read";
    }
    else {
        haveRead = "Read";
    }
    return;
}

function newBook() {
    readCheck();
    let hotNewBook = new Book(
        document.getElementById("title").value,
        document.getElementById("author").value,
        document.getElementById("pages").value,
        haveRead
    );
    myLibrary.push(hotNewBook);
    cardCreator();
};

function cardCreator() {
    for (let i = bookCounter; i < myLibrary.length; i++) {
        let bookInfo = myLibrary[i];
        
        let title = bookInfo.title; 
        let author = bookInfo.author;
        let pages = bookInfo.pages;
        let read = bookInfo.read;
        
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.dataset.id = (`${i}`);
        
        const cardTitle = document.createElement('p');
        cardTitle.classList.add('title');

        const cardAuthor = document.createElement('p');
        cardAuthor.classList.add('author', 'book-info');

        const cardPages = document.createElement('p');
        cardPages.classList.add('page-count', 'book-info');

        const cardRead = document.createElement('p');
        cardRead.classList.add('read-check', 'book-info');
        cardRead.dataset.read = (`${i}`);

        const bookID = document.createElement('p');
        bookID.classList.add('bookid', 'book-info');

        cardContainer.appendChild(cardDiv);
        
        cardDiv.appendChild(cardTitle);
        cardTitle.textContent = `${title}`;

        cardDiv.appendChild(cardAuthor);
        cardAuthor.textContent = `Written by ${author}`;

        cardDiv.appendChild(cardPages);
        cardPages.textContent = `${pages} Pages`;

        cardDiv.appendChild(cardRead);
        cardRead.textContent = `${read}`;

        cardDiv.appendChild(bookID);
        bookID.textContent = `Book ID Number: ${i}`;
            }
        bookCounter++;
};

function deleteCard() {
    let bookID = prompt("Please enter Book ID number");
    myLibrary.splice[bookID];
    document.querySelector(`[data-id="${bookID}"]`).remove();
};

function updateRead() {
    let bookID = prompt("Please enter Book ID number");
    let readStatus = document.querySelector(`[data-read='${bookID}']`).textContent;
    if (readStatus === "Not Read") {
        document.querySelector(`[data-read='${bookID}']`).textContent = "Read";
    }
    else {
        document.querySelector(`[data-read='${bookID}']`).textContent = "Not Read";
    }
    return;
}