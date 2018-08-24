$(document).ready(function () {
  // Getting references to the name input and author container, as well as the table body
  var username = $("#username");
  var password = $("#password");
  var nameInput = $("#username");

  $(document).on("click", "#login", handleUserFormSubmit);
  var url = window.location.search;
  console.log(url);
  function handleUserFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!username.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertUser({
      username: username.val().trim(),
      password: password.val().trim(),
      firstName: nameInput.val().trim().charAt(0)
    });
  } //end function handleUserFormSubmit

  function upsertUser(userData) {
    $.post("/", userData).then(redirect);

  }

  function redirect() {
    $.get("/", function (req, res) {
      window.location.href = "/profile";
    });
  };




});