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


        let span_a1 = document.createElement("span");
        let span_a2 = document.createElement("span");
        let span_b1 = document.createElement("span");
        let span_b2 = document.createElement("span");
        let span_c1 = document.createElement("span");
        let span_c2 = document.createElement("span");

        span_a1.innerText = "TITLE";
        span_a2.innerText = `${book.title}`;
        span_b1.innerText = "AUTHOR";
        span_b2.innerText = `${book.author}`;
        span_c1.innerText = "NUMBER OF PAGES";
        span_c2.innerText = `${book.numberOfPages}`;

        span_a1.classList.add("data");
        span_b1.classList.add("data");
        span_c1.classList.add("data");

        span_a2.classList.add("value");
        span_b2.classList.add("value");
        span_c2.classList.add("value");

        p1.appendChild(span_a1);
        p1.appendChild(span_a2);
        p2.appendChild(span_b1);
        p2.appendChild(span_b2);
        p3.appendChild(span_c1);
        p3.appendChild(span_c2);


        let read_status = document.createElement("div");
        if(book.isRead){
            read_status.innerText = `\u2705READ`;
        }
        else{
            read_status.innerText = "\u274CUNREAD";
        }
        read_status.classList.add("read-status");

        let buttons = document.createElement("div");
        let delButton = document.createElement("button");
        delButton.innerText = "DELETE";
        delButton.classList.add("del-button");
        let read_status_button = document.createElement("button");
        if (book.isRead){
            read_status_button.innerText = "MARK AS UNREAD";
        }
        else{
            read_status_button.innerText = "MARK AS READ";
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


const showBtn = document.querySelector("#add-book-button");
const closeBtn = dialog.querySelector("#closeBtn");
const submitBtn = dialog.querySelector("#submitBtn");

showBtn.addEventListener("click", (e) => {
    dialog.showModal();
});

let bookIconsList = document.querySelectorAll(".book-icon");
let bookIconArray = [...bookIconsList];
bookIconArray.forEach(icon => {
    icon.addEventListener("click", () => {
        dialog.showModal();
    })
});



submitBtn.addEventListener("click", (e) => {
    let author = dialog.querySelector("#author");
    let title = dialog.querySelector("#title");
    let pageCount = dialog.querySelector("#pages-count");
    let readBefore = dialog.querySelector("input[name = book-read-status]:checked");
    console.log(pageCount.value);
    console.log(readBefore);
    if (readBefore){
        if ((author.value) && (title.value) && (pageCount.value > 0) && (readBefore.value)){
            addBookToLibrary(title.value, author.value, pageCount.value, readBefore.value);
            dialog.close();
        }
    }
});








