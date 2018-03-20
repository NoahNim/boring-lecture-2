$(document).ready(function() {
  $("#first-paragraph").click(function() {
    $("#first-paragraph").removeClass("no-border");
    $("#first-paragraph").addClass("add-border")
  });
  $("#second-paragraph").click(function() {
    $("#second-paragraph").removeClass("no-border");
    $("#second-paragraph").addClass("add-border")
  });
});
