
const tabMenu = () =>{
    const animaisList = document.querySelectorAll('.animais-lista li')
    const animaisDescricao = document.querySelectorAll('.animais-descricao section')
    animaisDescricao[0].classList.add('ativo')

    function activeTab(index) {
        animaisDescricao.forEach((item) => {
          item.classList.remove('ativo');
        });
        animaisDescricao[index].classList.add('ativo');
      }

    animaisList.forEach((item, index) =>{
        item.addEventListener('click', () =>{
            activeTab(index)
        })
    })
}


const accordionTab = () =>{
    const faqList = document.querySelectorAll('.faq-list dt')
    const activeClass = 'ativo';
    faqList[0].classList.add(activeClass)
    faqList[0].nextElementSibling.classList.add(activeClass)

    function accordionFunction(){
        this.classList.toggle(activeClass)
        this.nextElementSibling.classList.toggle(activeClass)
    }

    faqList.forEach((item) =>{
        item.addEventListener('click', accordionFunction)
    })

}


const allFunction = () =>{
    tabMenu()
    accordionTab()
}

allFunction()