const addButton = document.querySelector('.add-book')
const closeModal = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')

addButton.addEventListener('click', (event) =>{
    modal.showModal()
    event.preventDefault();
})

closeModal.addEventListener('click', (event) => {
    modal.close()
    event.preventDefault();
})

const myLibrary = [];


function Book(title,author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(event){
    event.preventDefault();

    const form = event.target;
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const pages = form.elements.pages.value;

    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    displayBooks();
    form.reset();
    modal.close();
}

function displayBooks(){
    const bookDisplay = document.querySelector('.display');
    bookDisplay.innerHTML = '';

    myLibrary.forEach(book => {
        const bookInfo = document.createElement('div');
        bookInfo.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <hr>`;
        bookDisplay.appendChild(bookInfo);
    });
}

document.querySelector('form').addEventListener('submit', addBookToLibrary);