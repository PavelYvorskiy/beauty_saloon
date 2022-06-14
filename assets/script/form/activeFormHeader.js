const headerForm = document.querySelector('.content-form');
const btnFormHeader = document.querySelectorAll('.button');
btnFormHeader.forEach(elem =>{
  elem.addEventListener('click',()=>{
    headerForm.classList.add('active')
  })
})

headerForm.addEventListener('click',()=>{
  headerForm.classList.remove('active')
})