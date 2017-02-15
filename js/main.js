$(function() {
  // When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)
  $('.switch').click(function(){
    // $('button').removeClass('on').addClass('off');
    $('button').toggleClass('on off');
    $('body').toggleClass('light dark');

    if( $('h1.status').text() === "It's so bright in here!" ){
      $('h1.status').text("Hey, who turned off the lights?");

    } else{
      $('h1.status').text("It's so bright in here!");
    }
  });

});
