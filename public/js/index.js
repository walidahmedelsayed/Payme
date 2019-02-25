$("#btn").click(function() {
  $.ajax({
    url: "http://localhost:" + process.env.PORT + "/todos",
    cache: false,
    success: function(todos) {
      console.log(todos.message);
    }
  });
});
