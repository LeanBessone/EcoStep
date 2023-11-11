$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav:true,
    autoplay:true,
    autoPlaySpeed: 1000,
    autoPlayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1.25,
        },
        768:{
            items: 2.25,
        },
        1100:{
            items: 3.25,
        },
        1400:{
            items: 4.25,
        }
    },
});