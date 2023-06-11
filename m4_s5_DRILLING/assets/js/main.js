$(document).ready(function(){
  $("#field1Search").on("click", function(){
    $("#field1").css("backgroundColor","#90ef8f");
    $("#field1 *").css("color", "#2b8b2e");
    $("#field1 *").css("fontWeight", "bold");
  });
  $("#field2Search").on("click", function(){
    $("#field2").css("backgroundColor","#f1ff1d");
    $("#field2 *").css("color", "#fca515");
    $("#field2 *").css("fontWeight", "bold");
  });
  $("#field3Search").on("click", function(){
    $("#field3").css("backgroundColor","#add8e6");
    $("#field3 *").css("color", "#1f269b");
    $("#field3 *").css("fontWeight", "bold");
  });
});