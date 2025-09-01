const button = document.querySelector('.modal-button')
const modal = document.querySelector('.modal')
const close = document.querySelector('.modal-close')

button.addEventListener('click', () => {
    modal.style.display = 'block';
})

close.addEventListener('click',() => {
    modal.style.display = 'none';
})