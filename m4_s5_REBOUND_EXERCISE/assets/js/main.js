$(document).ready(function() {
  $('#codigo').on("focus",function() {
    $(this).css('backgroundColor', '#bfe1ec');
    $(this).css('color', 'blue');
  });

  $('#codigo').on("blur",function() {
    if($(this).val()){
      $(this).css('backgroundColor', '#a9f0a8');
      $(this).css('color', '#0d6e0d');
    }
    else{
      $(this).css('backgroundColor', '#fff');
      $(this).css('color', '#000');
    }
  });

  $("button").on("click", function(){
    $(this).css('backgroundColor', '#ffa500');
    $(this).css('borderColor', '#934a48');
    $(this).css('outline', '0');
    $(this).css('boxShadow', '0 0 0 0.25rem rgba(147, 74, 72, 0.25)');
    $(this).html('¿Estás seguro?');
  });

  $("button").on("dblclick", function(){
    $(this).css('backgroundColor', 'blue');
    $(this).css('borderColor', '#ac3551');
    $(this).css('outline', '0');
    $(this).css('boxShadow', '0 0 0 0.25rem rgba(172, 53, 81, 0.25)');
    $(this).html('¡OK!');
  }).on("mouseout", function(){
    $(this).css('backgroundColor', 'transparent');
    $(this).css('color', '#ac3551');
    $(this).css('outline', '0');
    $(this).css('boxShadow', 'none');
    $(this).html('COMPRADO');
  });
});