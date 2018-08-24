

$(document).ready(function () {
    var exercises =[];
    $.get("/profile", workoutString).then(getExercises); 


    function getExercise() {
        $.get("/portal", function(data) {
          exercises = data;
          initializeRows();
        });
      };

      function initializeRows() {
        $workoutTable.empty();
        var rowsToAdd = [];
        for (var i = 0; i < todos.length; i++) {
          rowsToAdd.push(createNewRow(exercises[i]));
        }
        $workoutTable.prepend(rowsToAdd);
      }

});