var Breakfast;
var Lunch;
var Dinner;
function changedMeal() {
  var myValue=$( "#selection1 option:selected" ).text();
  $("#mealFinal").html(myValue);
  var myValue2=$("#selection2 option:selected").text();
  $("#InOut").html(myValue2);
   var myValue3=$("#selection3 option:selected").text();
  $("#InNOut").html(myValue3)
}

  
  $(".selection1").select(function(){
    
    $("#Q2").fadeIn(slow)
  });
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}