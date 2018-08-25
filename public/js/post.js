$(document).ready(function () {
    var workoutObject;
    //var workoutArray = [];

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

        var workoutN = $("#workoutName").val().trim();
        console.log(titleT);
        workoutObject = {
            name: titleT,
            reps: repsR,
            sets: setsS,
            weight: weightsW,
            workoutName: workoutN
        }
        console.log(workoutObject);
        //workoutArray.push(workoutObject);
        //console.log(workoutArray)

        $.post("/profile", workoutObject).then(getExercises); 
    });

        /*$("#workoutSubmit").on("click", function() {
            //console.log("submitted")
            //var a = JSON.stringify(workoutArray)
            //console.log(a);
            $.post("/profile", workoutObject).then(getExercises);  


        })*/



        function getExercises() {
            console.log("worked")
          }


});