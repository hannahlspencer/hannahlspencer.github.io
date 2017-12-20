$(document).ready(() => {

  //toggles menu button display on click
  $('.menu-button').on('click', () => {
    $('.nav-menu').toggle();
  })
  
  //hides menu when mouse moves away from it
  $('.nav-menu').on('mouseleave', () => {
	  $('.nav-menu').hide();
  })
  
  //makes hero content fade in
  $('#hero-content').hide().fadeIn(1000);

  //makes picture more greyscale when description is hovered over in projects
  $('.image-bg').on('mouseenter', event => {
	  $(event.currentTarget).closest('.proj-image').addClass('greyscale');
  })
  
  //makes picture more greyscale when description is hovered over in projects
  $('.image-bg').on('mouseleave', () => {
    $('.proj-image').closest('.proj-image').removeClass('greyscale');
  })

}); 