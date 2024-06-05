

let tareaAg = document.getElementById("tarea")
let btnAgg = document.getElementById("btnAgg")


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
    
    
}

    btnAgg.addEventListener("click",postData)


