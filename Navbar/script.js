const navbarBtn = document.querySelector('.navbar__btn')
const navbarLink = document.querySelector('.navbar__links')
navbarBtn.addEventListener('click', function(){
    let value = navbar__links.classList.contains('navbar_collapse')
    if(value){
        navbarLinks.classList.remove('navbar__collapse')
    }
    else{
        navbarLinks.classList.add('navbar__collapse')
    }
})