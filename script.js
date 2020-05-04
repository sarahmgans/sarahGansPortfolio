$(document).ready(function () {
  const scroll = function (scrollTo) {
    $('html, body').animate({
      scrollTop: $(scrollTo).offset().top-55
    }, 500);
  }

  const clickEventStart = () => {
    $('a.down').on('click', function (e) {
      e.preventDefault();
      scroll('main');
    })
  }

  clickEventStart();

  // From https://codepen.io/yuki-san/pen/eJqLNO

  // All of the sections besides the contact section, as the nav bar never reaches the top of the contact section so it has a different top value. 
  let section = $('section#home, section#about, section#skills, section#projects')
    let nav = $('nav')
    const nav_height = 55

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    section.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        section.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  // The contact section has a different top value so it gets its seperate function. 
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    $('section.contact').each(function () {
      var top = $(this).offset().top - 55,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        $('section.contact').removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  nav.find('a').on('click', function () {
    var $el = $(this)
        id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - 53
    }, 500);

    return false;
  });
});