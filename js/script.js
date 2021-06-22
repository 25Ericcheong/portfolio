$(document).ready(function() {
  
  $("#hamburger-menu").click(function() {
    $(this).closest('#top-bar').find('.side-nav').css({"width":"90%"});
  });

  $("#close-nav").click(function() {
    $(this).closest('#top-bar').find('.side-nav').css({"width":""});
  });

  let currentYear = new Date().getFullYear();
  $("#current-year").append("Copyright <small>&#169;</small> " + currentYear + " Eric");

  $('#links a').on('click', function(event) {
    $(this).addClass('active');
  });

  // nav bar will change based on user's scrolling
  $(window).on('scroll', function() {
    $('.target').each(function() {
        if($(window).scrollTop() + 300 >= $(this).offset().top) {
          var id = $(this).attr('id');
          $('#links a').removeClass('active');
          $('#links a[href$='+ id +']').addClass('active');
        }
    });
  });

});

