function boton(){
    swal({
        title: "¿Estas seguro?",
        text: "Deseas subir una imagen del producto",
        icon: "warning",
        buttons: true,
        buttons: ["Cancelar", "Subir imagen"],
        dangerMode: true
      })
      .then((willDelete) => {
        if (willDelete) {
         swal("Listo", "La imagen se ha subido correctamente", "success");
        }else {
         
swal("Interrumpido", "Imagen no subida", "error");
            }
      });  
}