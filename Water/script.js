const water = document.querySelector('.water')
const btns = document.querySelectorAll('button')

btns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        water.style.height = btn.getAttribute('data-water-percentage')
    })
})