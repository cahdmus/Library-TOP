// Sort books
const myLibrary = [];
myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien', '1937', 'read'));
myLibrary.push(new Book('Project Hail Mary', 'Andy Weir', '2021', 'reading'));
myLibrary.push(new Book('Jane Eyre', 'Charlotte Brontë', '1847', 'read'));
myLibrary.push(new Book('The Picture of Dorian Gray', 'Oscar Wilde', '1890', 'unread'));

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
    function deleteBook(book) {
        let index = myLibrary.indexOf(book);
        myLibrary.splice(index, 1);
    }

    function changeStatus(book) {
        switch (book.status) {
            case 'read':
                card.statusBar.classList.remove("read");
                card.statusBar.classList.add("unread");
                card.statusText.textContent = "unread";
                book.status = "unread";
                break
            case 'unread':
                card.statusBar.classList.remove("unread");
                card.statusBar.classList.add("reading");
                card.statusText.textContent = "reading";
                book.status = "reading";
                break
            case 'reading':
                card.statusBar.classList.remove("reading");
                card.statusBar.classList.add("read");
                card.statusText.textContent = "read";
                book.status = "read";
                break
        }
    }

    function isBookRead(status) {
        switch (status) {
            case 'read':
                card.statusBar.classList.add("read");
                card.statusText.textContent = "read";
                break
            case 'reading':
                card.statusBar.classList.add("reading");
                card.statusText.textContent = "reading";
                break
            case 'unread':
                card.statusBar.classList.add("unread");
                card.statusText.textContent = "unread";
                break
            default:
                card.statusBar.classList.add("unread");
                card.statusText.textContent = "//";
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
        closebtn: document.createElement("button"),
    }

    card.bookDisplay.classList.add("bookDisplay");
    card.statusBar.classList.add("status");
    card.statusBar.setAttribute("title", "change status");
    isBookRead(book.status);
    card.bookContent.classList.add("bookContent");
    card.closebtn.setAttribute("type", "button");
    card.closebtn.setAttribute("title", "delete book");
    card.title.textContent = book.title;
    card.author.textContent = book.author;
    card.year.textContent = `published in ${book.year}`;

    card.statusBar.appendChild(card.statusText);

    card.bookContent.appendChild(card.closebtn);
    card.bookContent.appendChild(card.title);
    card.bookContent.appendChild(card.author);
    card.bookContent.appendChild(card.year);

    card.bookDisplay.appendChild(card.statusBar);
    card.bookDisplay.appendChild(card.bookContent);

    card.mainWindow.appendChild(card.bookDisplay);

    card.closebtn.addEventListener("click", () => {
        card.mainWindow.removeChild(card.bookDisplay);
        deleteBook(book);
    })

    card.statusBar.addEventListener("click", () => {
        console.log(book.status);
        changeStatus(book);
        console.log(book.status);
    })

    return card;
}

myLibrary.forEach(book => {
    createCard(book);
});


// Add book
function addBookToLibrary() {
    const form = {
        mainWindow: document.querySelector("body"),
        mask: document.createElement("div"),

        bookForm: document.createElement("div"),
        closeBtn: document.createElement("button"),
        br: document.createElement("br"),

        form: document.createElement("form"),
        fieldset: document.createElement("fieldset"),
        legend: document.createElement("legend"),
        h2: document.createElement("h2"),

        titleDiv: document.createElement("div"),
        titleH3: document.createElement("h3"),
        titleLabel: document.createElement("label"),
        titleInput: document.createElement("input"),

        authorDiv: document.createElement("div"),
        authorH3: document.createElement("h3"),
        authorLabel: document.createElement("label"),
        authorInput: document.createElement("input"),

        yearDiv: document.createElement("div"),
        yearH3: document.createElement("h3"),
        yearLabel: document.createElement("label"),
        yearInput: document.createElement("input"),

        statusDiv: document.createElement("div"),
        statusH3: document.createElement("h3"),
        statusLabel: document.createElement("label"),
        statusInput: document.createElement("input"),
        readLabel: document.createElement("label"),
        readInput: document.createElement("input"),
        readingLabel: document.createElement("label"),
        readingInput: document.createElement("input"),
        unreadLabel: document.createElement("label"),
        unreadInput: document.createElement("input"),
        fieldsetInput: document.createElement("fieldset"),

        sendForm: document.createElement("button"),
    }

    form.mask.classList.add("mask");
    form.mainWindow.appendChild(form.mask);

    form.bookForm.classList.add("bookForm");
    form.bookForm.classList.add("bookDisplay");
    form.h2.textContent = "Add New Book";
    form.closeBtn.setAttribute("type", "button");
    form.closeBtn.setAttribute("title", "close");
    form.closeBtn.setAttribute("id", "closebtn");
    form.legend.appendChild(form.h2);
    form.fieldset.appendChild(form.legend);

    form.titleLabel.setAttribute("for", "title");
    form.titleH3.textContent = "Title of the book";
    form.titleInput.setAttribute("type", "text");
    form.titleInput.setAttribute("id", "title");
    form.titleInput.setAttribute("name", "title");
    form.titleInput.required = true;
    form.titleLabel.appendChild(form.titleH3);
    form.titleDiv.appendChild(form.titleLabel);
    form.titleDiv.appendChild(form.titleInput);
    form.fieldset.appendChild(form.titleDiv);

    form.authorLabel.setAttribute("for", "author");
    form.authorH3.textContent = "Author's name";
    form.authorInput.setAttribute("type", "text");
    form.authorInput.setAttribute("id", "author");
    form.authorInput.setAttribute("name", "author");
    form.authorInput.required = true;
    form.authorLabel.appendChild(form.authorH3);
    form.authorDiv.appendChild(form.authorLabel);
    form.authorDiv.appendChild(form.authorInput);
    form.fieldset.appendChild(form.authorDiv);

    form.yearLabel.setAttribute("for", "year");
    form.yearH3.textContent = "Year of publication";
    form.yearInput.setAttribute("type", "text");
    form.yearInput.setAttribute("id", "year");
    form.yearInput.setAttribute("name", "year");
    form.yearInput.required = true;
    form.yearLabel.appendChild(form.yearH3);
    form.yearDiv.appendChild(form.yearLabel);
    form.yearDiv.appendChild(form.yearInput);
    form.fieldset.appendChild(form.yearDiv);

    form.statusLabel.setAttribute("for", "status");
    form.statusH3.textContent = "Reading status";
    form.titleInput.required = true;
    form.fieldsetInput.appendChild(form.statusH3);
    form.statusDiv.appendChild(form.statusLabel);

    form.readInput.setAttribute("type", "radio");
    form.readInput.setAttribute("id", "read");
    form.readInput.setAttribute("name", "status");
    form.readInput.setAttribute("value", "read");
    form.readLabel.setAttribute("for", "read");
    form.readLabel.textContent = "Read";
    form.readInput.required = true;
    form.fieldsetInput.appendChild(form.readInput);
    form.fieldsetInput.appendChild(form.readLabel);
    form.fieldsetInput.appendChild(form.br);
    form.readingInput.setAttribute("type", "radio");
    form.readingInput.setAttribute("id", "reading");
    form.readingInput.setAttribute("name", "status");
    form.readingInput.setAttribute("value", "reading");
    form.readingLabel.setAttribute("for", "reading");
    form.readingLabel.textContent = "Reading";
    form.fieldsetInput.appendChild(form.readingInput);
    form.fieldsetInput.appendChild(form.readingLabel);
    form.fieldsetInput.appendChild(form.br.cloneNode(true));
    form.unreadInput.setAttribute("type", "radio");
    form.unreadInput.setAttribute("id", "unread");
    form.unreadInput.setAttribute("name", "status");
    form.unreadInput.setAttribute("value", "unread");
    form.unreadLabel.setAttribute("for", "unread");
    form.unreadLabel.textContent = "Unread";
    form.fieldsetInput.appendChild(form.unreadInput);
    form.fieldsetInput.appendChild(form.unreadLabel);
    form.statusDiv.appendChild(form.fieldsetInput);
    form.fieldset.appendChild(form.statusDiv);

    form.form.appendChild(form.fieldset);
    form.sendForm.textContent = "Add Book";
    form.sendForm.setAttribute("type", "submit");
    form.sendForm.setAttribute("id", "addBookBtn");
    form.form.appendChild(form.sendForm);

    form.bookForm.appendChild(form.form);
    form.bookForm.appendChild(form.closeBtn);
    form.mask.appendChild(form.bookForm);

    const addBookForm = document.querySelector('form');

    addBookForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let title = document.getElementById("title");
        let author = document.getElementById("author");
        let year = document.getElementById("year");
        let status = document.querySelector('input[name="status"]:checked');
       
        myLibrary.push(new Book(title.value, author.value, year.value, status.value));
        createCard(myLibrary.pop());

        form.mainWindow.removeChild(form.mask);
    })

    form.closeBtn.addEventListener("click", () => {
        form.mainWindow.removeChild(form.mask);
        form.mainWindow.removeChild(form.bookForm);
    })
}

addBookBtn.addEventListener("click", () => {
    addBookToLibrary();
})