 function boton(){

swal({
                  title: "¿Estas seguro?",
                  text: "Subira una imagen del producto",
                  icon: "warning",
                  buttons: true,
                  buttons: ["Atras", "Subir"],
                  dangerMode: true
                })
                .then((willDelete) => {
                  if (willDelete) {
                   swal("Listo", "Se ha subido una imagen", "success");
                  }else {
                        swal("Interrumpido", "Imagen no subida", "error");
                      }
                });
   }