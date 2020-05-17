// Scroll function 
$(document).ready(function () {
  const scroll = function (scrollTo) {
    $('html, body').animate({
      scrollTop: $(scrollTo).offset().top - (ul.outerHeight() - 2)
    }, 500);
  }

  // Scroll for chevron
  const clickEventStart = () => {
    $('a.down').on('click', function (e) {
      e.preventDefault();
      scroll('main');
    })
  }

  // Scroll for menu items (not hamburger menu)
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
    let nav = $('ul')

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
  $('ul a').on('click', function () {
    $('.hamburger-menu nav').toggleClass('navVisible')
    $('.hamburger-menu .topBar').toggleClass('bar')
  })

  $('img.move, nav a').on('keydown', function (e) {
    if (e.key == 'Enter') {
      $('.hamburger-menu nav').toggleClass('navVisible')
    }
  })
});

