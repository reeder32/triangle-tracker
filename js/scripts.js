$(document).ready(function () {
  $("#formOne").submit(function (event) {

    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    if (side1 > 0 && side2 > 0 && side3 > 0) {
      if (side1 === side2 && side1 === side3) {
        $("#type").text("Equilateral");
      } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        $("#type").text("Isosceles");
      } else {
        $("#type").text("Scalene");
      }
      $(".result").fadeIn();
    } else {
      $(".result").fadeOut();
      alert("Incorrect input ;-(");
    }
    event.preventDefault();
  });
});