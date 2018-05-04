
$(document).ready(() => {
  
  //makes hero content fade in
  $('#intro-name').hide().fadeIn(2000);

  $('#front').hide().fadeIn(4000);
  $('#mobile').hide().fadeIn(5000);
  $('#ai').hide().fadeIn(6000);
  
  //$('#panel')
  $('.accordion').on('click', event => {
    $(event.currentTarget).closest('.panel').toggleClass('hide')
 
  })  
  
}); 

