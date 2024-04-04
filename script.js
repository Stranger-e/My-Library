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