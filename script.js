$(document).ready(function () {

  scroll = function (scrollTo) {
    $('html, body').animate({
      scrollTop: $(scrollTo).offset().top-55
    }, 600);
  }

  $('a.home, a.about, a.skills, a.projects, a.contact').on('click', function (e) {
    e.preventDefault();
    scroll($(this).attr('href'))
  })
});