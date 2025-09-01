const open = document.querySelector('.modal-open')
const modal = document.querySelector('.modal')
const close = document.querySelector('.modal-close')

open.addEventListener('click', () => {
    modal.style.display = 'block';
})

close.addEventListener('click', () => {
    modal.style.display = 'none';

})
