const myLibrary = [];
const booksContainer = document.querySelector("#books-container");

function Book(title, author, numberOfPages, isRead){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;

    if (isRead === "true"){
        this.isRead = true;
    }
    else {
        this.isRead = false;
    }
}

function addBookToLibrary(title, author, numberOfPages, isRead) {
    let book = new Book(title, author, numberOfPages, isRead)
    myLibrary.push(book);
    displayBook();
}

addBookToLibrary("Discipline", "Ram", 23, false);

function displayBook(){
    while(booksContainer.lastChild){
        booksContainer.removeChild(booksContainer.lastChild);
    }
    
    for (let book of myLibrary){
        let newBook = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        p1.innerText = `Title: ${book.title}`;
        p2.innerText = `Author: ${book.author}`;
        p3.innerText = `Number of Pages: ${book.numberOfPages}`;


        let read_status = document.createElement("div");
        if(book.isRead){
            read_status.innerText = `\u2705 Read`;
        }
        else{
            read_status.innerText = "\u274C Unread";
        }
        read_status.classList.add("read-status");

        let buttons = document.createElement("div");
        let delButton = document.createElement("button");
        delButton.innerText = "Delete";
        delButton.classList.add("del-button");
        let read_status_button = document.createElement("button");
        if (book.isRead){
            read_status_button.innerText = "Mark as Unread";
        }
        else{
            read_status_button.innerText = "Mark as Read";
        }
        read_status_button.classList.add("read-status-button");


        buttons.appendChild(delButton);
        buttons.appendChild(read_status_button);
        buttons.classList.add("book-buttons");
        newBook.appendChild(p1);
        newBook.appendChild(p2);
        newBook.appendChild(p3);
        newBook.appendChild(read_status);
        newBook.appendChild(buttons);
        newBook.classList.add("book");
        booksContainer.appendChild(newBook);

        delButton.addEventListener("click", (e) => {
            deleteBook(book);
        });

        read_status_button.addEventListener("click", (e) => {
            toggleReadStatus(book);
        });

    }
}

function toggleReadStatus(book){
    if (book.isRead){
        book.isRead = false;
    }
    else {
        book.isRead = true;
    }
    displayBook();
}


function deleteBook(book){
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    displayBook();
}

// function toggleReadStatus()


const showBtn = document.querySelector("#add-book button");
const closeBtn = dialog.querySelector("#closeBtn");
const submitBtn = dialog.querySelector("#submitBtn");

showBtn.addEventListener("click", (e) => {
    dialog.showModal();
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let at = document.querySelector("#author");
    at.style.color = "red";
    let author = dialog.querySelector("#author");
    let title = dialog.querySelector("#title");
    let pageCount = dialog.querySelector("#pages-count");
    let readBefore = dialog.querySelector(('input[name = "book-read-status"]:checked'));


    if ((author.value) && (title.value) && (pageCount.value > 0) && (readBefore.value)){
        console.log(readBefore.value);
        addBookToLibrary(title.value, author.value, pageCount.value, readBefore.value);
        dialog.close();
        console.log(myLibrary);
    }
})






