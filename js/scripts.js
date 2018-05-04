//business logic
function operation;
for (var i = 1, i <= integer, i++) {
  if (i % 15 == 0) {
    $("#result").append("<li>" + "pingpong" + "</li>")
  } else if (i % 5 == 0) {
    $("#result").append("<li>" + "pong" + "</li>")
  } else if (i % 3 == 0) {
    $("#result").append("<li>" + "ping" + "</li>")
  } else {
    $("#result").append("<li>" + i.toString() + "</li>");
  }
}
//user interface logic
$(document).ready(function() {
  $("form.pingpong").submit(function() {
    number = parseInt($("#a").val());
    $("#result").text("");


    $("#result").val('');
    event.preventDefault();
  });
});
