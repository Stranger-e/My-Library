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

modal.addEventListener('click', e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if(
        e.clientX < dialogDimensions.left || 
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ){
        modal.close()
    }
});

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

    myLibrary.forEach((book, index) => {
        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book');
        bookInfo.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Number Of Pages: ${book.pages}</p>
            <form>
                <label for="read">Read</label>
                <input type="checkbox" name="read" id="read">
            </form>
            <button class="delete"> Delete</button>`;
        bookDisplay.appendChild(bookInfo);
    });

    const deleteButton = document.querySelectorAll('.delete');
    deleteButton.forEach(button =>{
        button.addEventListener('click', deleteBook);
    })

}

function deleteBook(event){
    const index = event.target.dataset.index;
    myLibrary.splice(index, 1);
    displayBooks();
}

document.querySelector('form').addEventListener('submit', addBookToLibrary);