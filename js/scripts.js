$(document).ready(function() {
  $("#options").click(function(event) {
    var animal = $("input:radio[name=animal]:checked").val();
    $(".option").hide();
    if (animal === "turtles") {
      $("#turtle").show();
    } else if (animal === "snakes") {
      $("#snake").show();
    } else {
      $("#beetle").show();
    }
    event.preventDefault();
  });
});
