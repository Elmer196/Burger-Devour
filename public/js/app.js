$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: 1
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured to", newDevour);
          location.reload();
        }
      );
    });
  
    $(".add-burger").on("submit", function(event) {
      event.preventDefault();
      var burgerName = document.getElementById("ca").value;
  
      var newBurger = {
        burger_name: burgerName,
        devoured: false
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });