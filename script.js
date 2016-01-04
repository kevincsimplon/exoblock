$(document).ready (function(){
  $(document).on("click",  ".block", function() {
    $( ".block").not(this).removeClass("yellow")
    $(this).toggleClass("yellow");
  });
});
