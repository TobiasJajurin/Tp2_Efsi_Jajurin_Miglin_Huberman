let listaTareas = document.getElementById("listaTareas");
let tareas = document.getElementById("Tareas");
let boton = document.getElementById("Boton");
let botonEliminar = document.getElementById("BotonEliminar");
boton.addEventListener("click", () => EnviarTarea());

function EnviarTarea(id = new Date().toLocaleString(), value = tareas.value) {
  if (value.trim() !== "") {
    AbleButton();
    let li = document.createElement("li");
    let botonBorrar = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    botonBorrar.innerHTML = "Borrar";
    li.textContent = value;
    localStorage.setItem(id, value);
    li.appendChild(checkbox);
    li.appendChild(botonBorrar);
    listaTareas.appendChild(li);
    tareas.value = "";

    botonBorrar.addEventListener("click", () => {
      listaTareas.removeChild(li);
      localStorage.removeItem(id)
    });

    botonEliminar.addEventListener("click", () => {
      const checkBox = li.querySelector(`input[type="checkbox"]`);
      if (checkBox.checked) {
        listaTareas.removeChild(li);
      }
    });



  } else {
    DisableButton();
  }
}

function DisableButton() {
  boton.disabled = true;
}

function AbleButton() {
  boton.disabled = false;
}


for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  EnviarTarea(key, value);
}
