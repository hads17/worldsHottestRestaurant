
  $("#inputSubmit").on("click", function(event) {
    event.preventDefault();
    var newRes = {
      name: $("#inputName").val().trim(),
      phone: $("#inputPhone").val().trim(),
      email: $("#inputEmail").val().trim(),
      dateTime: $("#inputTime").val().trim()
    };

   // Question: What does this code do??
    $.post("/api/new", newRes)
    .done(function(data) {
      console.log(data);
      alert("Adding character...");
    });