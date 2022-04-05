$(".testimonial").slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})


let burger = document.querySelector('.burger')


burger.addEventListener('click', function () {
    $("#header").toggleClass('menu')
})


let mobMenu = document.querySelector('.mob-menu')

burger.addEventListener('click', function () {
    mobMenu.style.display = 'flex'
})
