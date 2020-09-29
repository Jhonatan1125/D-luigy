

letras = /[a-zA-Z ]/;
	alfanumerico = /^[a-zA-Z0-9_]*$/



function registrarProducto(){
var nombreProducto = document.getElementsByName('nombreProducto2').value;
var descripcion = document.getElementsByName('descripcion2').value;
var talla = document.getElementsByName('talla2').value;
var Color = document.getElementsByName('Color2').value;
var precioUnitario = document.getElementsByName('precioUnitario2').value;
}
if
  (nombreProducto === '' || descripcion === '' || talla === ''|| Color === ''|| precioUnitario === '') {


		swal({  
  
      title: 'Correcto',
     input: 'checkbox',
     icon: "success",
     text: "Se ha hecho un nuevo registro en el inventario"

});

}

if(!letras.test(nombreProducto)){
  swal("El campo  nombre no puede contener caracteres ilegales");
  return false;
}if(!letras.test(descripcion)){
  swal("El campo  nombre no puede contener caracteres ilegales");
  return false;
}
 
  
  
  
     
  