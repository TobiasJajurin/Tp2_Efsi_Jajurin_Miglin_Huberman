let listaTareas = document.getElementById("listaTareas");
let tareas = document.getElementById("Tareas");
let boton = document.getElementById("Boton");

boton.addEventListener("click", EnviarTarea);  

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
    else
    {
        DisableButton()
    }
}

function DisableButton() {
    boton.disabled = true;
}

function AbleButton() {
    boton.disabled = false;
}