$(document).ready(function(){
   console.log("good");
});

$("form").click(function(e){
  e.preventDefault();
  console.log("prevent");
});

$("#submit-btn").click(getCity);
  console.log("button clicked");
 
function getCity(){
  var city = $("#city-type").val();
  console.log(city);
  
  if (city == "New York" || city == "New York City" || city == "NYC"){
    $("body").removeClass().addClass("nyc");
  
  } else if (city == "San Francisco" || city == "SF" || city == "Bay Area"){
     $("body").removeClass().addClass("sf");
  
  } else if (city == "Los Angeles" || city == "LA" || city == "LAX"){
    $("body").removeClass().addClass("la");
  
  } else if (city == "Austin" || city == "ATX"){
    $("body").removeClass().addClass("austin");
  
  } else if (city =="Sydney" || city == "SYD"){
    $("body").removeClass().addClass("sydney");
  }

  else $("body").removeClass();

}