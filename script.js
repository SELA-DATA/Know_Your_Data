window.addEventListener('scroll', () => {
    const content2 = document.querySelector('.content-2')
    const body = document.querySelector('body')
    const featuresContainer = document.querySelector('.features-container')
    const scrollPosition = window.scrollY

    if (scrollPosition >= content2.offsetTop) {
        body.style.backgroundColor = '#c18e62'
        featuresContainer.style.color = 'white'
    } else {
        body.style.backgroundColor = ''
        featuresContainer.style.color = '#c18e62'
    }
})

const enlargePlot = (id) => {
    const screenWidth = window.innerWidth
    const plot = document.querySelector(`#${id}`)
    const featuresContainer = document.querySelector('.features-container')
    if (plot.style.transform !== 'scale(2)' && screenWidth >= 767) {
        plot.classList.toggle('scaled')
    } else {
        plot.classList.remove('scaled')
    }
}

const getCurrentDateTime = () => {
    let date = new Date()
    
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let hrs = date.getHours()

    return({dateString : `${day}-${month}-${year}` , time : hrs}) 
}

const pageRedirect = () => {
    let date = btoa(getCurrentDateTime().dateString)
    let time = btoa(getCurrentDateTime().time)

    const urlString = `https://knowyourdata.streamlit.app/?date=${date}&time=${time}`

    window.location.href = urlString
    
}