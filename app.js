let listaTareas = document.getElementById("listaTareas");
let tareas = document.getElementById("Tareas");
let boton = document.getElementById("Boton");
let botonEliminar = document.getElementById("BotonEliminar");
boton.addEventListener("click", () => EnviarTarea());
let chequeado = false;

function EnviarTarea(id = new Date().toLocaleString(), value = tareas.value) {
  if (value.trim() !== "") {
    AbleButton();
    let li = document.createElement("li");
    let botonBorrar = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = (localStorage?.getItem(id)?.split(";")[1] ?? "false") !== "false";
    botonBorrar.innerHTML = "Borrar";

    checkbox.addEventListener("change", () => {
      let valor = localStorage.getItem(id).split(";");
      valor[1] = checkbox.checked;
      console.log(checkbox.checked, id);
      localStorage.setItem(id, valor.join(";"));
    });

    li.textContent = value.split(";")[0];
    localStorage.setItem(
      id,
      value + (value.split(";").length != 2 ? ";false" : "")
    );
    li.appendChild(checkbox);
    li.appendChild(botonBorrar);
    listaTareas.appendChild(li);
    tareas.value = "";

    botonBorrar.addEventListener("click", () => {
      listaTareas.removeChild(li);
      localStorage.removeItem(id, value);
    });

    botonEliminar.addEventListener("click", () => {
      const checkBox = li.querySelector(`input[type="checkbox"]`);
      if (checkBox.checked) {
        listaTareas.removeChild(li);
        localStorage.removeItem(id, value);
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
