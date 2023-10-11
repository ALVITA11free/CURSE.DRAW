// boton

// const comunidad = document.getElementById('#aviso--boton');

//     comunidad.addEventListener("click", function(){
//         return style.display="block";

//     })

    // cerrar boton
function terreno(){
    document.getElementById('aviso--evento').style.display = 'block';
    document.getElementById('aviso--boton').style.display = 'none';
}

function cerrar(){
    document.getElementById('aviso--evento').style.display = 'none';
    document.getElementById('aviso--boton').style.display = 'block';
}

