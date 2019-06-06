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
  $('.album_container').click(function() {
    var id = $(this).attr('id');
    $('#' + id + "front").fadeOut(500);
 
  })  

  $('.album_container').mouseleave(function() {
    var id = $(this).attr('id');
    $('#' + id + "front").fadeIn(500);
 
  })  
  
}); 

