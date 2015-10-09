$(document).ready(function() {

  $(".btn").click(function() {

    var colorInput = $("#q-color").val();
    var gameInput = $("#q-game").val();
    var bandInput = $("#q-band").val();
    var seasonInput = $("#q-season").val();
    var langInput = $("#q-lang").val();

    $("#a-color").text(colorInput);
    $("#a-game").text(gameInput);
    $("#a-band").text(bandInput);
    $("#a-season").text(seasonInput);
    $("#a-lang").text(langInput);

    $("#fav-list").show();
    event.preventDefault();


  })







});
