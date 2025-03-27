let listaTareas;
let i = 0;
let tareas
let boton

tareas = document.getElementById("Tareas")
boton = document.getElementById("Boton")


function EnviarTarea ()
{
    if(tareas != null)
    {
        listaTareas[i] = tareas
        i = i+1;
        AbleButton()
    }
    else
    {
        DisableButton();
    }
}

function DisableButton()
{
    boton.disabled = true;
}

function AbleButton()
{
    boton.disabled = false;
}