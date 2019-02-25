$("#btn").click(function() {
  $.ajax({
    url: "http://localhost:3000/todos",
    cache: false,
    success: function(todos) {
      console.log(todos.message);
    }
  });
});
