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
    form.reset();
    modal.close();
}

document.querySelector('form').addEventListener('submit', addBookToLibrary);