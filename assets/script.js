$(document).ready(function () {

  $('.project-slider-card').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
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
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});


$(document).ready(function () {
  $('.customers-review-card').slick({
    dots: true,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1
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

