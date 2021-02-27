function nuevoMensaje(){
    const url = 'https://api.chucknorris.io/jokes/random';

    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            let elemento = document.getElementById('mostrarDatos');
                elemento.innerHTML = ` <p>${data.value}</p>
                                     `;
             console.log(data);
            
             let arrayMensajes = new Array();
             arrayMensajes.push(data.value);
             listarMsj(arrayMensajes);
        })
        .catch(err => console.log(err))
}

function listarMsj(arrayMensajes){

    let mostrar = document.getElementById('guardarDatos');

    arrayMensajes.forEach(function (arrayMensajes) {
        mostrar.innerHTML += '<div> <p>' + arrayMensajes + '</p> </div>';
        
    });
}