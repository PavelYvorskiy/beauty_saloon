
const priceContent = document.querySelectorAll('.price-content-items');
priceContent.forEach((elem)=>{
  const priceContentBtn = elem.querySelector('.price-btn');
  const priceContentMenu = elem.querySelector('.price-content-items__menu');
  priceContentBtn.addEventListener('click',()=>{
    priceContentMenu.classList.toggle('active');
    priceContentBtn.classList.toggle('active')
  })
})