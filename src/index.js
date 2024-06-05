let tareaAg = document.getElementById("tarea")
let btnAgg = document.getElementById("btnAgg")
let contenedor = document.getElementById("contenedorTareas")

//POST
async function postData() {
    console.log("dsda");
    try {
        let tarea = {
            nombre: tareaAg.value,
            id: Date.now(),
            estado: false
        }
        let peticion = await fetch('http://localhost:3000/api/task',{
        method:"POST",  
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(tarea)
        })
        let guardarDatos= await peticion.json()
        console.log(guardarDatos);
    } catch (error) {
        console.log(error);
    }
}

//GET
async function getData() {
    let peticion = await fetch('http://localhost:3000/api/task')
    let datos = await peticion.json()
    datos.forEach( tarea => {
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        let checkBox = document.createElement("input")
        let deleteBtn = document.createElement("button")
        checkBox.type = "checkbox"
        h2.innerHTML = tarea.nombre 
        h2.appendChild (checkBox)
        h2.appendChild(deleteBtn)
        div.appendChild(h2)

    });
}
btnAgg.addEventListener("click",postData)


