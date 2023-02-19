const dropdownToggleBtn = document.getElementById('dropdown-toggle-btn')
const dropdown = document.querySelector('.dropdown')

dropdownToggleBtn.addEventListener('click', ()=>{
    dropdown.classList.toggle('dropdown-toggle')
})