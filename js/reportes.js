function reportes(id){
let tablaReportes = ['uno', 'dos', 'tres']
tablaReportes.forEach(ocultarTabla);
document.getElementById(id).style.display = 'block';
}

function ocultarTabla(id){
    document.getElementById(id).style.display = 'none';
    

}