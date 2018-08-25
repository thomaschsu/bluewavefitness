$(document).ready(function () {
    var getExercises = function (a) {
        console.log(a.length)

        for (var i = 0; i < a.length; i++) {
            var pushTable = $("#workoutTableBody");
            // Create and save a reference to new empty table row
            var newrow = $("<tr></tr>");
            var exName = a[i].name;
            var exData = ("<td>" + exName + "</td>");
            //++++++++++++++++++++++++++++++++++++++++++
            var exReps = a[i].reps;
            var repsData = ("<td>" + exReps + "</td>");
            //++++++++++++++++++++++++++++++++++++++++++
            var exSets = a[i].sets;
            var setsData = ("<td>" + exSets + "</td>");
            //++++++++++++++++++++++++++++++++++++++++++
            var exWeight = a[i].weight;
            var weightData = ("<td>" + exWeight + "</td>");
            //+++++++++++++++++++++++++++++++++++++++++
            newrow.append(exData, repsData, setsData, weightData);
            pushTable.append(newrow);

        }
    }

    $.get("/api/portal").then(getExercises);




})