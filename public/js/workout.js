$(document).ready(function() {
  // Getting references to the name input and author container, as well as the table body
  var workoutArray = [];
  var nameInput = $("#exercise-name");
  var repsInput = $("#reps-name");
  var setsInput = $("#sets-name");
  var weightInput = $("#weight-name");
  var workoutList = $("h5");
  var workoutContainer = $("#testing");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#login-form", handleAuthorFormSubmit);
  $(document).on("click", "#submittal", submitWorkout);
  //$(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the initial list of Authors
  getExercises();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleAuthorFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    

    var exerciseNew = {
      name: nameInput.val().trim(),
      sets: setsInput.val().trim(),
      reps: repsInput.val().trim(),
      weight: weightInput.val().trim()
    };
    console.log(exerciseNew);
    workoutArray.push(exerciseNew);
    
  }

  // A function for creating an author. Calls getAuthors upon completion
  function submitWorkout() {  
    
    
    
    console.log(workoutArray)
    
    $.post("/api/examples", workoutArray).then(getExercises);    
  }

  // Function for creating a new list row for authors
  //Function for creating a new card for a workout
  function createWorkoutCard(data) {
    var newDiv = $("<div>");
    newDiv.data("workout", data);
    newDiv.append("<h4>" + data.name + "</h4>");
    newDiv.append("<h4> " + data.reps + "</h4>");
    newDiv.append("<h4> " + data.sets + "</h4>");
    newDiv.append("<h4> " + data.weight + "</h4>");
    return newDiv;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  // Function for retrieving exercises and getting them ready to be rendered to the page
  function getExercises() {
    $.get("/api/examples", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createWorkoutCard(data[i])); //line 36
      }
      renderWorkoutList(rowsToAdd);  //line 60
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  // A function for rendering the list of exercises to the page
  function renderWorkoutList(rows) {
    workoutList
      .children()
      .not(":last")
      .remove();
    workoutContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      workoutList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create a workout before you can create a Post.");
    workoutContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  /*
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    })
      .then(getAuthors);
  } 
  */
});