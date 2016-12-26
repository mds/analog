$(function(){
  FastClick.attach(document.body);
  $('.mobile-toggle').click(function(){
    $(this).toggleClass('open');
    $('.menu').fadeToggle(200).toggleClass('open');
    $('body').toggleClass('no-scroll');
  });

  $('.edit-map-button').click(function(){
    $(this).fadeOut(200).parent('.map').addClass('edit-mode');
    $('.save-position').slideDown(200);
  });

  $('.cancel-position').click(function(){
    $('.save-position').slideUp(200);
    $('.map').removeClass('edit-mode');
    $('.edit-map-button').fadeIn(200);
  });
  $('.create-new').click(function(){
    if ( $('.buttons-container').hasClass('show') ){
        $('.buttons-container').removeClass('show');
        $('.create-new').children('span').html('Create New...');
    } else {
        $('.buttons-container').addClass('show');
        $('.create-new').children('span').html('Cancel');
    }
  });

 $("input#home-search").focus(function(){
   $('.results').slideDown();
   $(this).addClass('show-search');
 }).blur(function(){
   $('.results').slideUp();
   $(this).removeClass('show-search');
 });

 $('.show-page-links').click(function(){
   $('.pages-overlay').addClass('show');
 });

 $('.close-page-overlay').click(function(){
   $('.pages-overlay').removeClass('show');
 });




});
