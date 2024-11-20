// Sort books
const myLibrary = [];
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', '1937', 'read'));
myLibrary.push(new Book('Jane Eyre', 'Charlotte Brontë', '1847', 'read'));
myLibrary.push(new Book('The Picture of Dorian Gray', 'Oscar Wilde', '1890', 'not read'));

function Book(title, author, year, status) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;

    this.info = function () {
        return `${this.title} by ${this.author}, came out in ${this.year} pages, ${this.status}`;
    }
}


// Display books
function createCard(book) {
    function isBookRead(status) {
        switch (status) {
            case 'read':
                card.statusBar.classList.add("read");
                card.statusText.textContent = "read";
                break
            default:
                card.statusBar.classList.add("unread");
                card.statusText.textContent = "unread";
        }
    }

    const card = {
        mainWindow: document.querySelector("#main"),
        bookDisplay: document.createElement("div"),
        statusBar: document.createElement("div"),
        statusText: document.createElement("p"),
        bookContent: document.createElement("div"),
        title: document.createElement("h2"),
        author: document.createElement("h3"),
        year: document.createElement("h4"),
    }

    card.bookDisplay.classList.add("bookDisplay");
    card.statusBar.classList.add("status");
    isBookRead(book.status);
    card.bookContent.classList.add("bookContent");
    card.title.textContent = book.title;
    card.author.textContent = book.author;
    card.year.textContent = `published in ${book.year}`

    card.statusBar.appendChild(card.statusText);

    card.bookContent.appendChild(card.title);
    card.bookContent.appendChild(card.author);
    card.bookContent.appendChild(card.year);

    card.bookDisplay.appendChild(card.statusBar);
    card.bookDisplay.appendChild(card.bookContent);

    card.mainWindow.appendChild(card.bookDisplay);

    return card;
}

myLibrary.forEach(book => {
    createCard(book);
});

// Add book
let addBookBtn = document.querySelector('#addBookBtn');

function addBookToLibrary() {
    let title = prompt("What is the title of the book ?", "title")
    let author = prompt("Who is the author ?", "author's name")
    let year = prompt("When was it published ?", "year")
    let status = prompt("Have you read it ?", "read, not read")

    myLibrary.push(new Book(title, author, year, status));
}

addBookBtn.addEventListener("click", () => {
    addBookToLibrary();
    createCard(myLibrary.pop());
})