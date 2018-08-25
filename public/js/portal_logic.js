
console.log("running");
// $(document).ready(function () {
//     var exercises =[];
//     fetchExercise();

//     function fetchExercise() {
//         $.get("/api/portal", function(data) {
//           exercises = data;
//           console.log("test");
//           initializeRows();
//         });
//       };

//       function initializeRows() {
//         $workoutTable.empty();
//         var rowsToAdd = [];
//         for (var i = 0; i < todos.length; i++) {
//           rowsToAdd.push(createNewRow(exercises[i]));
//         }
//         $workoutTable.prepend(rowsToAdd);
//       }

//       initializeRows();

// });