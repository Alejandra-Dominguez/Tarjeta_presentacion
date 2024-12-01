const btnDark = document.querySelector("#btn-dark");
const body = document.querySelector("body");
const tarjeta = document.querySelector(".contenedor");
const linkEstilo = document.querySelector("#theme-stylesheet"); 

const estadoDarkMode = localStorage.getItem("dark-mode");

function activarModoDark(){
    linkEstilo.setAttribute("href", "mododark.css"); 
    body.classList.add("modo-dark__body");
    tarjeta.classList.add("modo-dark__tarjeta");
    localStorage.setItem("dark-mode","activado");
}

function desactivarModoDark(){
    linkEstilo.setAttribute("href", "estilos.css");
    body.classList.remove("modo-dark__body");
    tarjeta.classList.remove("modo-dark__tarjeta");
    localStorage.setItem("dark-mode","desactivado");
}

if(estadoDarkMode === "activado"){
    activarModoDark();
    btnDark.textContent="Modo light";
}
else{
    desactivarModoDark();
    btnDark.textContent="Modo Dark";
}

btnDark.addEventListener("click",()=>{
    const estadoDarkMode = localStorage.getItem("dark-mode");
    
    if(estadoDarkMode==="desactivado"){
        activarModoDark();
        btnDark.textContent="Modo light";
    }
    else{
        desactivarModoDark();
        btnDark.textContent="Modo dark";
    }
});