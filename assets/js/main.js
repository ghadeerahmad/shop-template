
$(document).ready(function () {
    var slides = document.querySelectorAll('.slide-item')
    var currentSlide = 0
    var slider = document.querySelector('.slideshow')
    var interval = slider.attributes.getNamedItem('data-interval').value
    console.log('interval is ', interval)
    setInterval(() => {
        if (currentSlide === slides.length - 1)
            currentSlide = 0
        slides.forEach((item) => {
            item.classList.remove('active')
            item.classList.remove('fadeLeft')
        })
        slides[currentSlide].classList.add('active')
        slides[currentSlide].classList.add('fadeLeft')
        currentSlide++
    }, interval)
})