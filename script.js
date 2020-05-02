$(document).ready(function () {

  scroll = function (scrollTo) {
    $('html, body').animate({
      scrollTop: $(scrollTo).offset().top
    }, 600);
  }

  $('a.about, a.skills').on('click', function (e) {
    e.preventDefault();
    scroll($(this).attr('href'))
  })
});