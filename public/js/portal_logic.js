$(document).ready(function () {
    var getExercises = function (a) {
        console.log(a)

        var test = $("#testDiv")
        var ex = $("<p>");
        ex.append(a);
        test.append(ex)
    }


    $.get("/api/portal").then(getExercises);




})