
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

const scrollAnimation = () =>{
    const sections = document.querySelectorAll('.js-scroll')
    const windowMetade = window.innerHeight * 0.6 


    function animaScroll(){
        sections.forEach((item) =>{
            const sectionTop = item.getBoundingClientRect().top - windowMetade
            if(sectionTop < 0){
                item.classList.add('ativo')
            }
        })
    }
    animaScroll()
    window.addEventListener('scroll', animaScroll)

}

const allFunction = () =>{
    tabMenu()
    accordionTab()
    scrollAnimation()
}

allFunction()