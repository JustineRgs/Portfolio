const NavbarBurger = document.querySelector('.NavBar-burger')
const NavbarList = document.querySelector('.NavBar-list')

NavbarBurger.addEventListener('click', () => {
    NavbarList.classList.toggle('Display-none')
})