$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#inventarioBarra tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  $(document).ready(function(){
    $("#myInput2").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#inventarioBarra2 tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  $(document).ready(function(){
    $("#Input1").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#tablaVentas tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  $(document).ready(function(){
    $("#Input2").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#reporte2 tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  $(document).ready(function(){
    $("#Input3").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#reporte3 tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });