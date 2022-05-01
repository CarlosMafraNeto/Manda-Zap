function mandaZap(elemento) {
    let texto = elemento.firstElementChild.innerText
    let numero = prompt("Qual é o número?")
    window.open(`https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`)
    }