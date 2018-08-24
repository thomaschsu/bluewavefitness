$(document).ready(function(){

    $(".button").click(function() {
      var weight = $("#weight").val();
      var feet = $("#feet").val();
      var inches = $("#inches").val();
      var height = (parseInt(feet) * 12) + parseInt(inches);
      console.log(height);
      var squareHeight = height * height;
      var bmi = (weight/squareHeight) * 703;
      
      $("#bmi_result").text(bmi.toFixed(1));
      
      if (bmi < 18.5) {
        $("#category_result").text("Underweight");
      } else if (bmi > 18.5 && bmi < 25) {
        $("#category_result").text("Normal");
      } else if (bmi > 25 && bmi < 30) {
        $("#category_result").text("Overweight");
      } else if (bmi > 30) {
        $("#category_result").text("Obese");
      }
      
    });
    
  });