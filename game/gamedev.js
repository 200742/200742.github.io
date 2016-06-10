$(document).ready(function(){
  var wood = 0; 
  var food = 3;
var stone = 0;
  var fish = 0;
  $("#foodscore").html(food);
  
 if(food <= 0 ) {
  	alert("You have starved to death. <br> </br>");
  	location.reload();
  }
  else{};
  
  $("#spear").click(function(){
 if(wood>=2 && stone>= 3){
   wood = wood- 2;
   stone = stone- 3;
   $("#woodscore").html(wood);
   $("#stonescore").html(stone);
   
   
   
  $("#dialogue").prepend("With your new spear you can now protect yourself from enemies.<br> </br>");
  }
  
  else{
   $("#dialogue").prepend("You'll need more resources to make that.<br> </br>");
 }
  
 });//end of making a spear 
  

  $("#axe").click(function(){
 if(wood>=10 && stone>= 5){
   wood = wood- 10;
   stone = stone- 5;
   $("#woodscore").html(wood);
   $("#stonescore").html(stone);
   
   
  $("#dialogue").prepend("You can now chop down wood more efficiently.<br> </br>");
  }
  
  else{
   $("#dialogue").prepend("You'll need more resources to make that.<br> </br>");
 }
  
 });//end of making a axe
  
  
  $("#hut").click(function(){
 if(wood>=100 && stone>= 45){
   wood = wood- 100;
   stone = stone- 45;
   $("#woodscore").html(wood);
   $("#stonescore").html(stone);
   
   
  $("#dialogue").prepend("You have some basic shelter to protect you from mother nature.<br> </br>");
  }
  
  else{
   $("#dialogue").prepend("You'll need more resources to make that.<br> </br>");
 }
  
 });//end of making a hut 
  
  
    $("#torch").click(function(){
 if(wood>=2 && stone>= 2){
   wood = wood- 2;
   stone = stone- 2;
   $("#woodscore").html(wood);
   $("#stonescore").html(stone);
   
   
  $("#dialogue").prepend("You can keep yourself warm and see through the dark.<br> </br>");
  }

  else{
   $("#dialogue").prepend("You'll need more resources to make that.<br> </br>");
 }
  
 });//end of making a torch 
  
  $("#wood").click(function(){
   wood = wood+ 5;
    $("#woodscore").html(wood);
   });//end of collecting wood
  
  $("#food").click(function(){
   food = food+ 2;
   $("#foodscore").html(food);
   });//end of collecting food
  
  $("#stone").click(function(){
   stone = stone+ 3;
    $("#stonescore").html(stone);
   });
  
   $("#fish").click(function(){
   fish = fish+ 1;
    $("#fishscore").html(fish)
   });
  
   
  
  
  $("#food").click(function(){
    $("#dialogue").prepend("You search around for some food, and ended up gathering some berries. Bettter than nothing.<br> </br>");

  });//food dialogue
  
    $("#wood").click(function(){
    $("#dialogue").prepend("You find branches and chop up the trees you see.<br> </br>");
});//wood dialouge
  
 $("#stone").click(function(){
    $("#dialogue").prepend("You find a few rocks scattered on the surface of the ground. <br> </br>");
   
 });//stone dialouge
  
  $("#water").click(function(){
    $("#dialogue").prepend("You find some fresh water near the pond and drink it with your bare hands.<br> </br>");
  });//end of water dialouge
  
  $("#fish").click(function(){
    $("#dialogue").prepend("You find a few fish swimming in the pond and grab one quickly from the back. <br> </br>");
   
  });//end of fish dialouge

  setInterval(function() {
 if(food <= 0 ) {
  	alert("You have starved to death. <br> </br>");
  	location.reload();
  }
  else{};

}, 4000);

  setInterval(function() {
    $("#dialogue").prepend("You are thirsty, go drink some water.<br> </br>");
}, 40000);

setInterval(function() {
    $("#dialogue").prepend("You are hungry, you ate some food.<br> </br>");
    food = food - 3;
    $("#foodscore").html(food);
}, 43000);



  
  $("#food,#water,#stone,#fish, #wood").hide();
  
  
  $("#forest").click(function(){
    $(" #water, #fish").hide();
    $("#food, #wood, #stone").show()
    $("body").css({"background-image":"url(http://www.terynobrien.com/wp-content/uploads/2012/12/forestsun.jpg"})
  }) //end of forest click function
  
   $("#pond").click(function(){
    $(" #water, #fish").show();
    $("#food, #wood, #stone").hide()
    $("body").css({"background-image": "url(http://wallpapercave.com/wp/KRoiWKk.jpg)"}); //end of pond click function
  
});
});//end of Jquery

