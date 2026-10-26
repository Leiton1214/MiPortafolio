let menuVisible = false;

function mostrarOcultarMenu(){
    const nav = document.getElementById("nav");
    const botonMenu = document.querySelector(".nav-responsive");
    if(menuVisible){
        nav.classList = "";
        botonMenu.setAttribute("aria-expanded", "false");
        botonMenu.setAttribute("aria-label", "Abrir menú");
        menuVisible = false;
    }else{
        nav.classList = "responsive";
        botonMenu.setAttribute("aria-expanded", "true");
        botonMenu.setAttribute("aria-label", "Cerrar menú");
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    const botonMenu = document.querySelector(".nav-responsive");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");
    menuVisible = false;
}
