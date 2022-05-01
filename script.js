function mandaZap(Elemento) {
    let texts = Elemento.firstElementChild.innerText ;
    let ero = prompt("Para qual número gostaria de enviar essa mensagem?")
    let zapLink = 'https://api.whatsapp.com/send?phone=+557197215228&text=Me mame '
      window.open(zapLink)
    }