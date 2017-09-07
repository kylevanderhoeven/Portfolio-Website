// Check off specific to-dos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("complete");
});

// Click on X to delete to-do
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
     $(this).remove();
  });
  event.stopPropogation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // grabbing new to-do text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new 'li' and add to 'ul'
    $("ul").append("<li><span id='listItems'><i class='fa fa-trash'></i></span> " + "<i class='fa fa-circle'></i> " + todoText + "</li>")
  }
});

$(".fa-pencil, .fa-list").click(function(){
  $("input[type='text']").fadeToggle();
});
