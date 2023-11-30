export function slickSliders() {
  if (jQuery('.slider-images').length >= 1) {
    jQuery('.slider-images').slick({
      autoplay: true,
      draggable: true,
      focusOnSelect: true,
      speed: 500,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.7378 6.99387L21.5894 6.99387L20.3023 13.0059L22.45 13.0059L23.7378 6.99387Z" fill="#101D3F"/><path d="M26 6.99387L24.6799 6.99387L23.3922 13.0059L24.7123 13.0059L26 6.99387Z" fill="#101D3F"/><path d="M2.94845e-05 9.99967L11.0465 20L12.5441 13.006L19.2693 13.006L20.5564 6.994L13.8319 6.994L15.3295 -8.08634e-06L2.94845e-05 9.99967Z" fill="#101D3F"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.26221 13.0061H4.41056L5.69764 6.99414H3.54994L2.26221 13.0061Z" fill="#101D3F"/><path d="M0 13.0061H1.32007L2.60781 6.99414H1.28773L0 13.0061Z" fill="#101D3F"/><path d="M25.9998 10.0003L14.9534 0L13.4558 6.99401H6.73068L5.4436 13.006H12.1681L10.6704 20L25.9998 10.0003Z" fill="#101D3F"/></svg></button>',
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: false,
      centerMode: false,
      centerPadding: '0',
      fade: false,
      cssEase: 'ease-in-out',
      variableWidth: true,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            variableWidth: false
          }
        }
      ]


    });
  }
  if (jQuery('.slider-reviews').length >= 1) {
    jQuery('.slider-reviews').slick({
      autoplay: true,
      draggable: true,
      focusOnSelect: true,
      speed: 500,
      autoplaySpeed: 7000,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.7378 6.99387L21.5894 6.99387L20.3023 13.0059L22.45 13.0059L23.7378 6.99387Z" fill="#101D3F"/><path d="M26 6.99387L24.6799 6.99387L23.3922 13.0059L24.7123 13.0059L26 6.99387Z" fill="#101D3F"/><path d="M2.94845e-05 9.99967L11.0465 20L12.5441 13.006L19.2693 13.006L20.5564 6.994L13.8319 6.994L15.3295 -8.08634e-06L2.94845e-05 9.99967Z" fill="#101D3F"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.26221 13.0061H4.41056L5.69764 6.99414H3.54994L2.26221 13.0061Z" fill="#101D3F"/><path d="M0 13.0061H1.32007L2.60781 6.99414H1.28773L0 13.0061Z" fill="#101D3F"/><path d="M25.9998 10.0003L14.9534 0L13.4558 6.99401H6.73068L5.4436 13.006H12.1681L10.6704 20L25.9998 10.0003Z" fill="#101D3F"/></svg></button>',
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      pauseOnHover: false,
      centerMode: true,
      centerPadding: '25%',
      fade: false,
      initialSlide: 2,
      cssEase: 'ease-in-out',
      variableWidth: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            centerPadding: '33.333%',
            initialSlide: 1,
          }
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 1,
            centerPadding: '15%',
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerPadding: '0',
            dots: false
          }
        }
      ]
    });
  }
}