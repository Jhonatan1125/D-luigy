function mostrarProductos(id)  {  
	var idsTipoProducto = ["catalogoProductos","producto1", "producto2","producto3","producto4","producto5","producto6"];
	idsTipoProducto.forEach(ocultarTipo);
	document.getElementById(id).style.display = 'block'; 
}  

function ocultarTipo(id) {  
	document.getElementById(id).style.display='none';
}



