$("#btn").click(function() {
  $.ajax({
    url: "https://gentle-castle-59895.herokuapp.com/todos",
    cache: false,
    success: function(todos) {
      console.log(todos.message);
    }
  });
});
