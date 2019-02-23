var name = Math.floor((Math.random() * 10) + 1);

$("button").click(function() {
 var user = $("#input").val();

  if (name > user) {
    $("p").html("Zwade");
} else if(name < user) {
    $("p").html("Wilkinson");
    
}else{
    $("p").html("D");
}
});