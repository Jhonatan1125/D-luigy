




function registrarProducto(){

var nombreProducto = document.getElementById('nombreProducto2').value;
var descripcion = document.getElementById('descripcion2').value;
var talla = document.getElementById('talla2').value;
var Color = document.getElementById('Color2').value;
var precioUnitario = document.getElementById('precioUnitario2').value;




letras = /[a-zA-Z ]/;

if (nombreProducto === '' || descripcion === '' || talla === ''|| Color === ''|| precioUnitario === '') {


		swal({  

            title: 'Incorrecto',
            input: 'checkbox',
            icon: "warning",
            text: "Todos los campos son obligatorios"

   });

   return false;

}else{

    swal({
                  title: "¿Estas seguro?",
                  text: "Un producto será registrado ",
                  icon: "warning",
                  buttons: true,
                  buttons: ["Cancelar", "Registrar"]

                })
                .then((willDelete) => {
                  if (willDelete) {
                   swal("Listo", "Se ha registrado un nuevo producto", "success");
                  }
                });
  }

if(!letras.test(nombreProducto)){
  swal("El campo  nombre no puede contener caracteres ilegales");
  return false;
}if(!letras.test(descripcion)){
  swal("El campo  descripción no puede contener caracteres ilegales");
  return false;
}


}
 
  
  
  
     
function modificarProducto(){

  var nombreProducto = document.getElementById('nombreProducto').value;
  var descripcion = document.getElementById('descripcion').value;
  var talla = document.getElementById('talla').value;
  var Color = document.getElementById('Color').value;
  var precioUnitario = document.getElementById('precioUnitario').value;
  
  
  
  
  letras = /[a-zA-Z ]/;
  
  if (nombreProducto === '' || descripcion === '' || talla === ''|| Color === ''|| precioUnitario === '') {
  
  
      swal({  
  
              title: 'Incorrecto',
              input: 'checkbox',
              icon: "warning",
              text: "Todos los campos son obligatorios"
  
     });
  
     return false;
  
  }else{
  
      swal({
                    title: "¿Estas seguro?",
                    text: "Un producto será modificado ",
                    icon: "warning",
                    buttons: true,
                    buttons: ["Cancelar", "Modificar"]
  
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                     swal("Listo", "Se ha modificado un producto", "success");
                    }
                  });
    }
  
  if(!letras.test(nombreProducto)){
    swal("El campo  nombre no puede contener caracteres ilegales");
    return false;
  }if(!letras.test(descripcion)){
    swal("El campo  descripción no puede contener caracteres ilegales");
    return false;
  }
  
  
  }
   

  function eliminarRegistro(){

    var idRegistro = document.getElementById('idRegistro').value;
    
    
    
   
    numeros = /^([0-9])*$/;
    
    if (idRegistro === '' ) {
    
    
        swal({  
    
                title: 'Incorrecto',
                input: 'checkbox',
                icon: "warning",
                text: "Todos los campos son obligatorios"
    
       });
    
       return false;
    
    }else{
    
        swal({
                      title: "¿Estas seguro?",
                      text: "Un producto será eliminado ",
                      icon: "warning",
                      buttons: true,
                      buttons: ["Cancelar", "Eliminar"]
    
                    })
                    .then((willDelete) => {
                      if (willDelete) {
                       swal("Listo", "Se ha eliminado un producto", "success");
                      }
                    });
      }if(!numeros.test(idRegistro)){
        swal("El campo no puede contener caracteres ilegales");
        return false;
    
    
      }
    }
     