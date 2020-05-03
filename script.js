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
  const sections = $('section')
    nav = $('nav')
    nav_height = 55

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  nav.find('a').on('click', function () {
    var $el = $(this)
        id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - 55
    }, 500);

    return false;
  });
});