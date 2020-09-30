const $btnVentas = document.querySelector("#btnVentas"),
    $tablaVentas = document.querySelector("#tablaVentas");

$btnVentas.addEventListener("click", function() {
    let tableExport = new TableExport($tablaVentas, {

        headers: true,
        exportButtons: false, // No queremos botones
        filename: "Reporte ventas", //Nombre del archivo de Excel
        sheetname: "Reporte de las ventas", //Título de la hoja
    });
    let datos = tableExport.getExportData();
    let preferenciasDocumento = datos.tablaVentas.xlsx;
    tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
});




const $btnInventario = document.querySelector("#btnInventario"),
    $tablaInventario = document.querySelector("#tablaInventario");

$btnInventario.addEventListener("click", function() {
    let tableExport = new TableExport($tablaInventario, {

        headers: true,
        exportButtons: false, // No queremos botones
        filename: "Reporte Inventario", //Nombre del archivo de Excel
        sheetname: "Reporte del inventario", //Título de la hoja
    });
    let datos = tableExport.getExportData();
    let preferenciasDocumento = datos.tablaInventario.xlsx;
    tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
});



const $btnFidelizacion = document.querySelector("#btnFidelizacion"),
    $tablaFidelizacion = document.querySelector("#tablaFidelizacion");

$btnFidelizacion.addEventListener("click", function() {
    let tableExport = new TableExport($tablaFidelizacion, {

        headers: true,
        exportButtons: false, // No queremos botones
        filename: "Reporte fidelizacion", //Nombre del archivo de Excel
        sheetname: "Reporte de la fidelizacion", //Título de la hoja
    });
    let datos = tableExport.getExportData();
    let preferenciasDocumento = datos.tablaFidelizacion.xlsx;
    tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
});




