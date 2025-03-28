let listaTareas = document.getElementById("listaTareas");
let tareas = document.getElementById("Tareas");
let boton = document.getElementById("Boton");
let botonEliminar = document.getElementById("BotonEliminar")

boton.addEventListener("click", EnviarTarea);  
botonEliminar.addEventListener("click", EliminarTarea);  


function EnviarTarea(event) {
    event.preventDefault();  

    if (tareas.value.trim() !== "") 
    {  
        AbleButton()
        let li = document.createElement("li");
        li.textContent = tareas.value;  
        listaTareas.appendChild(li);
        tareas.value = "";  
    }
    
}
function EliminarTarea ()
{
    listaTareas.remove()
}

function DisableButton() {
    boton.disabled = true;
}

function AbleButton() {
    boton.disabled = false;
}