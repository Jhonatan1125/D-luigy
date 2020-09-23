$('.toggle').click(function(){
  $('.formulario').animate({
      height: "toggle",
      'padding-top': 'toggle',
      'padding-bottom': 'toggle',
      opacity: 'toggle'
  }, "slow");
});

$(document).on('click', '#contraseña', function() {
  swal({
         title: 'Confirmación de email',
         text: "Ingrese su correo electronico para la verificación",
         content: "input"
      })
     .then((value) => {
       swal(`Se ha enviado un correo de confirmacion a: ${value}`);
      });

});