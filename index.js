let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}


let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}


var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
   loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableonInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  
  var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev", 
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});

// Function to view next slide
function viewNextSlide() {
    swiper.slideNext();
}

// Function to view previous slide
function viewPrevSlide() {
    swiper.slidePrev();
}

// Add click event to swiper-button-next
var nextButton = document.querySelector('.swiper-button-next');
nextButton.addEventListener('click', viewNextSlide);

// Add click event to swiper-button-prev
var prevButton = document.querySelector('.swiper-button-prev');
prevButton.addEventListener('click', viewPrevSlide);

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
   loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableonInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });