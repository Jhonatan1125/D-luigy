function Login(){ 
    var done=0; 
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 
    if (usuario=="admin12" && password=="1234") { 
    window.location="Interfaz-Administrador.html"; 
    } 
    if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
    window.location="TU_PAGINA_WEB.HTML"; 
    } 
    if (usuario=="" && password=="") { 
    window.location="errorpopup.html"; 
    } 
    } 