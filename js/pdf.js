$("#pdfInventario").on("click",function(){

   $("#tablaInventario").tableHTMLExport({
      type:'pdf',
      filename:'inventario'
   });
});
$("#pdfVentas").on("click",function(){

   $("#tablaVentas").tableHTMLExport({
      type:'pdf',
      filename:'ventas'
   });
});
$("#pdfFidelizacion").on("click",function(){

   $("#tablaFidelizacion").tableHTMLExport({
      type:'pdf',
      filename:'fidelización'
   });
});

