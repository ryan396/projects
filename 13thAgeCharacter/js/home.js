//home.js
//ready function says that when webpage is opened, run this function
//$symbol is an alias for jquery function. can replace with call to jquery
//such as jQuery
$(document).ready(function() {
  //hides id="second"
  //$("#second").hide();
  //$("#third").remove();
  //$("#emptyDiv").append('p').text("A new paragraph of text...");

  //$("#first").removeClass("text-center");

  //$("#newButton").addClass("btn btn-default");
  $("#third").remove();
  $("#spellname").append("p").text("A new paragraph of text...");
  $("#first").css("color", "blue");
});
