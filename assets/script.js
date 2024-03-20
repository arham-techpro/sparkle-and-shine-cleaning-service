$('.project-slider-card').slick({
  arrows:true,
  dots: true,
  slidesToShow: 4,
  infinite:true,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(document).ready(function () {
  $('.customers-review-slider').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });
  $('.menu-hambueger').click(function(){

    $('.mobile-menu-bar').toggleClass('fa-times');
    $('.main-header').toggleClass('menu-open');
      
  })
});


$(window).scroll(function () {
  var position = document.documentElement.scrollTop;

  var header = document.querySelector(".main-header");

  if (position > 150) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

});

