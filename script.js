function openNav() {
  document.getElementById("myNav").style.height = "95%";
  document.getElementById("myNav").style.border = "1px solid black";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("myNav").style.border = "";
}

$(document).ready(() => {
  
  //makes hero content fade in
  $('#intro-name').hide().fadeIn(4000);
  
  //$('#panel')
  $('.accordion').on('click', event => {
    $(event.currentTarget).closest('.panel').toggleClass('hide')
 
  })  
  
}); 

