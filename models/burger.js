// Make sure we wait to attach our handlers until the DOM is fully loaded.

src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
$(function() {
    $(".add-burger").on("click", function(event) {
      var id = $(this).data("id");
      var burger = $(this).data("newBurger");
  
      var newFood = {
        burger: burger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newFood
      }).then(
        function() {
          console.log("new burger added to ", burger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "UPDATE",
      }).then(
        function() {
          console.log("devoured burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  