$(document).ready(function () {

    var workoutArray = [];

    $(document).on("click", ".clickbutton", function () {
        var id = $(this).attr("id");
        //console.log(id)
        var repsR = $("#reps_input" + id).val().trim();
        //console.log(repsR);
        var setsS = $("#sets_input" + id).val().trim();
       // console.log(setsS);
        var weightsW = $("#weight_input" + id).val().trim();
        //console.log(weightsW);
        var titleT = $("#title_input" + id).attr("val");
        console.log(titleT);
        var workoutObject = {
            name: titleT,
            reps: repsR,
            sets: setsS,
            weight: weightsW
        }
        workoutArray.push(workoutObject);
        console.log(workoutArray)
    });

        $("#workoutSubmit").on("click", function() {
            //console.log("submitted")
            var workoutString = JSON.stringify(workoutArray)
            $.post("/profile", workoutString).then(getExercises);  


        })



        function getExercises() {
            console.log("worked")
          }


});
    /*
    
    
    */

