$("#pdfFidelizacion").on("click",function(){
    $("#reporte3").tableHTMLExport({
        type:'pdf', 
        filename:'fidelizacion',
    });
});

$("#ventasExport").on("click",function(){
    $("#tablaVentas").tableHTMLExport({
        type:'pdf', 
        filename:'ventas',
    });
});

$("#pdfInventario").on("click",function(){
    $("#reporte2").tableHTMLExport({
        type:'pdf', 
        filename:'inventario',
    });
});



