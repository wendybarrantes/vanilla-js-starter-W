/* 
Referenciar las etiquetas de HTML para darle funcionalidad en js.
*/
let inputTask = document.getElementById("inputTask")
let BtnAT = document.getElementById("BtnAT")
let ContainerTask = document.getElementById("ContainerTask")
let ContTask= document.getElementById("ContTask")

/*
Método POST.
el método POST se crea con una función asíncrona que tiene un bloque 
try-catch. Dentro de la función se crea un objeto que va a ser el cuerpo
de la Api(enlace). Se controla la petición a la Api con el fetch
indicando que es un método POST luego se le pasa al body el objeto convertido en formaro JSON.
*/
async function postData() {
    try {
        let tarea = {
            nombre: inputTask.value,
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

/*El método GET. Se crea con una función asíncrona, que llama a la Api para traer los datos. 
Estos datos se guardan dentro de la variable datos, está variable es igual al await de nuestra petición, o sea 
los datos que haya traído de la Api .
La variable datos funciona como arreglo por eso se le aplica la función forEach, esta va a iterar sobre cada tarea 
que haya en nuestra Api haciendo el código que esté dentro del bloque forEach.
*/
async function getData() {
    let peticion = await fetch('http://localhost:3000/api/task')
    let datos = await peticion.json()
    datos.forEach( tarea => {
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        h2.innerHTML = tarea.nombre 
        let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML="Delete"

        h2.appendChild (checkBox)
        h2.appendChild(deleteBtn)
        div.appendChild(h2)
        ContainerTask.appendChild(div)
        deleteBtn.addEventListener("click",()=>{
         deleteTask(tarea.id)
        })
    });
}
BtnAT.addEventListener("click",postData)


/*Metodo Delete. creamos una función asímcrona que recibe por parametro el id de la tarea a eliminar 
dentro de esta función se crea una variable petición que hace un await.fetch pasandole a la 
url(enlace) el id y luego ejecutando el método delete.
*/
async function deleteTask(id) {
    let peticion = await fetch(`http://localhost:3000/api/task/${id}`,{
        method: "DELETE" 
    })
    console.log("se borró la tarea" + id);
}



//Metodo PUT. 
async function updateData(id) {
    let peticion = await fetch (`http://localhost:3000/api/task/${id}`,{
        method:"PUT"
    })
    
}

