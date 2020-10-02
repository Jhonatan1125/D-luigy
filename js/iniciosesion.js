function validacionnicio(){
    var usuario = document.getElementById('usuario').value;
    var contraseña = document.getElementById('contrasenainicio').value;
   
    
    if(usuario === 'admin12@gmail.com' && contraseña === '12345'){
        window.location.href="Usuarios/interfaz-Administrador.html";

    }else{
        swal({
            title: 'Incorrecto',
            input: 'checkbox',
            icon: "warning",
            text: "Los datos ingresados son incorrectos",
            button: true
        });
      return false;      
    }
   
}

function validacionregistro(){
    var usuario2 = document.getElementById('usuario2').value;
    var contraseña2 = document.getElementById('contraseña2').value;
    var correoelectronico2 = document.getElementById('correoelectronico2').value;
    var telefono = document.getElementById('telefono').value;
    var confirmarcontraseña = document.getElementById('confirmarcontraseña').value;

    expresion = /\w+@\w+\.+[a-z]/;
    letras = /[a-zA-Z ]/;
    numeros = /^([0-9])*$/;


if(usuario2 === '' || contraseña2 === '' || correoelectronico2 === '' || telefono === '' || confirmarcontraseña === '' ){


    swal({
        title: 'Incorrecto',
        input: 'checkbox',
        icon: "error",
        text: "Los campos son obligatorios",
        button: true
    });
  return false;      
}
if(!expresion.test(correoelectronico2)){
    swal("El correo no es valido");
    return false;


}
if(!numeros.test(telefono)){
    swal("El telefono no es valido");
    return false;


}
if(contraseña2 === confirmarcontraseña && confirmarcontraseña === contraseña2){
    window.location.href="admin.html";


     }else{
    
     swal({
        title: 'Incorrecto',
        input: 'checkbox',
        icon: "warning",
        text: "las contraseñas no coinciden"
       
    });
return false;

   

}
}


