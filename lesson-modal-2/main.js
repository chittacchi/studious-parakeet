const open= document.getElementById('modal-open')
const modalBg= document.getElementById('modal-background')
const content= document.getElementById('modal-content') 
const close= document.getElementById('modal-close')

open.addEventListener('click',() => {
    content.classList.add('active');
    modalBg.classList.add('active');
})

close.addEventListener('click',() => {
    content.classList.remove('active');
    modalBg.classList.remove('active');
})

modalBg.addEventListener('click',() => {
    content.classList.remove('active');
    modalBg.classList.remove('active');
})