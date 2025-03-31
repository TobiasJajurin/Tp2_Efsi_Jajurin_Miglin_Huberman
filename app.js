let listaTareas = document.getElementById("listaTareas");
let tareas = document.getElementById("Tareas");
let boton = document.getElementById("Boton");
let botonEliminar = document.getElementById("BotonEliminar")
boton.addEventListener("click", EnviarTarea);  
botonBorrar.addEventListener("click", EliminarTarea);  

function EnviarTarea(event) {
    event.preventDefault();  

    if (tareas.value.trim() !== "") 
    {  
        AbleButton()
        let li = document.createElement("li");
        let botonBorrar = document.createElement("button");
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        botonBorrar.innerHTML = "Borrar"
        li.textContent = tareas.value;
        li.appendChild(checkbox);
        li.appendChild(botonBorrar);  
        listaTareas.appendChild(li);
        tareas.value = "";  

        botonBorrar.addEventListener('click', () => {
            listaTareas.removeChild(li)
        })

        botonEliminar.addEventListener('click', () => {
            const checkBox = li.querySelector(`input[type="checkbox"]`)
            if(checkBox && checkBox.checked){
                listaTareas.removeChild(li)
            }
        })
    }
    else{
    
        DisableButton();
    }
    
}

function DisableButton() {
    boton.disabled = true;
}

function AbleButton() {
    boton.disabled = false;
}