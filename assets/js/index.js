const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')
const menuItens = document.querySelectorAll('.menu-lateral__link')

function atualizaMenu(event, array) {
    for(const item of array) {
        item.classList.remove('active')
    }
    event.target.classList.add('active')
}

botaoMenu.addEventListener("click", () => {
    menu.classList.toggle('active')
})

document.addEventListener("scroll", () => {
    menu.classList.remove('active')
})

document.addEventListener("click", (event) => {
    atualizaMenu(event, menuItens)
})

