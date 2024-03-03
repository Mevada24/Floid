// sticky header
jQuery(window).scroll(function(){
    if ($(window).scrollTop() >= 160) {
        jQuery('.header-inner').addClass('sticky');
     }
     else {
        jQuery('.header-inner').removeClass('sticky');
     }
  });

// best sellers 
jQuery('.best-sellers-product .row').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    nextArrow: '<button class="next-arrow"><img src="asset/image/arrow-right-short.svg"></button>',
    responsive: [
      {
        breakpoint: 1251,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });