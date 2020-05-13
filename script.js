$(document).ready(function () {
  const scroll = function (scrollTo) {
    $('html, body').animate({
      scrollTop: $(scrollTo).offset().top - (nav.outerHeight() - 1)
    }, 500);
  }

  const clickEventStart = () => {
    $('a.down').on('click', function (e) {
      e.preventDefault();
      scroll('main');
    })
  }

  const clickEventMenu = () => {
    $('.nav a').on('click', function (e) {
    e.preventDefault();
    scroll($(this).attr('href'))
    })
  }

  clickEventStart();
  clickEventMenu();

  // From https://codepen.io/yuki-san/pen/eJqLNO

  // All of the sections besides the contact section, as the nav bar never reaches the top of the contact section so it has a different top value. 
  let section = $('section#home, section#about, section#skills, section#projects, section#contact')
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

  $('i.move').on('click', function () {
    $('.hamburger-menu nav').toggleClass('navVisible')
  })

  $('i').on('keydown', function (e) {
    if (e.key == 'Enter') {
      $('.hamburger-menu nav').toggleClass('navVisible')
      // $('i.move').toggleClass('fa fa-bars fas fa-times')
    }
  })
});