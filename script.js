/* this code changes the navigation bar color once it reaches a certain section of the webpage */

$(window).scroll(function () {
    if ($(window).scrollTop() >= 380) {
      $('.navbar').css('background','black');
    } else {
      $('.navbar').css('background','transparent');
      }
  });
  