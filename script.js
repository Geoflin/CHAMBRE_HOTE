//affichage Front-End

const openDisplayFrontEndlanguage = document.getElementById('openFrontEndBtn')
const closeDisplayFrontEndlanguage = document.getElementById('closeFrontEndBtn')

const openDisplayFrontEndLanguage = () => {
    openFrontEndBtn.style.display= "none"
    closeFrontEndBtn.style.display= "flex"

    cssSkils.style.display = "none"
    openDisplayCss.style.display= "none"
    closeDisplayCss.style.display= "none"

    jsSkils.style.display = "none"
    openDisplayJs.style.display= "none"
    closeDisplayJs.style.display= "none"
  }

const closeDisplayFrontEndLanguage = () => {
    openFrontEndBtn.style.display= "flex"
    closeFrontEndBtn.style.display= "none"

    openDisplayCss.style.display= "flex"
    closeDisplayCss.style.display= "none"

    openDisplayJs.style.display= "flex"
    closeDisplayJs.style.display= "none"
}

openDisplayFrontEndlanguage.addEventListener('click', openDisplayFrontEndLanguage)
closeDisplayFrontEndlanguage.addEventListener('click', closeDisplayFrontEndLanguage)