// Scroll function 
$(document).ready(function () {
  const scroll = function (scrollTo) {
    $('html, body').animate({
      scrollTop: $(scrollTo).offset().top - (nav.outerHeight() - 2)
    }, 500);
  }

  // Scroll for chevron
  const clickEventStart = () => {
    $('a.down').on('click', function (e) {
      e.preventDefault();
      scroll('main');
    })
  }

  // Scroll for menu items 
  const clickEventMenu = () => {
    $('.nav a').on('click', function (e) {
    e.preventDefault();
    scroll($(this).attr('href'))
    })
  }

  clickEventStart();
  clickEventMenu();

  // Scrolling for the fixed nav
  // From https://codepen.io/yuki-san/pen/eJqLNO

  let section = $('header#home, section#about, section#skills, section#projects, section#contact')
  let nav = $('nav')

  $(window).on('scroll', function () {
    const cur_pos = $(this).scrollTop();

    section.each(function () {
      const top = $(this).offset().top - nav.outerHeight()
      const bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        section.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  // For hamburger menu
  $('.hamburger, nav a').on('click', function () {
    $('.hamburger-menu nav').toggleClass('navVisible')
    $('.hamburger').toggleClass('is-active')
  })
  
  // For accessible hamburger menu
  $('.hamburger-menu, nav a').on('keydown', function (e) {
    if (e.key == 'Enter') {
      $('.hamburger-menu nav').toggleClass('navVisible')
      $('.hamburger').toggleClass('is-active')
    }
  })
});

