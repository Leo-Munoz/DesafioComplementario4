const div = document.getElementById("div");
const boton = document.getElementById("boton")
const inputBuscar = document.getElementById("inputBuscar")
const botonBuscar = document.getElementById("botonBuscar")

let Acciones = [
    {
        id: 1,
        nombre: "BROOTA SPA",
        precio: 2400,
        logo: "https://broota.s3.amazonaws.com/solicitudes/15/logo/logo_bipKZXb58Z0oPCXc67LHkjghgMxP8C_200_200.png"
    },
    {
        id: 2,
        nombre: "FARMALOOP",
        precio: 1300,
        logo: "https://broota.s3.amazonaws.com/solicitudes/588/logo/logo_SxXV3GNHnbwZc4IbQdK5IhzCMfzgCF_200_200.png"
    },
    {
        id: 3,
        nombre: "ENVIRON",
        precio: 900,
        logo: "https://broota.s3.amazonaws.com/solicitudes/454/logo/logo_oVfu7RH2Vun4AJlbIuTIFQUECgQh94_200_200.png"
    },
]

let carrito = []

Acciones.forEach(empresa => {
    let cardRenderizada = document.createElement("div")
    cardRenderizada.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${empresa.logo}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${empresa.nombre}</h4>
                <h6 class="card-text">Precio: $${empresa.precio}</h6>
            </div>
            <button id=${empresa.id}> COMPRAR </button>
        </div>
    `
    div.append(cardRenderizada)
    const boton = document.getElementById(empresa.id)
    boton.addEventListener("click", () => comprarAcciones(empresa))
})

const comprarAcciones = (empresa) => {
    let empresaExiste = carrito.find(item => item.id === empresa.id)
    if(empresaExiste !== undefined){
        empresaExiste.precio = empresaExiste.precio + empresa.precio
        empresaExiste.cantidad = empresaExiste.cantidad + 1
    }else{
        carrito.push({
            id: empresa.id,
            nombre: empresa.nombre,
            precio: empresa.precio,
            imagen:empresa.imagen,
            cantidad: 1
        })
    }
}

const buscarEmpresa = (string) => {
    console.log(string.toUpperCase())
    let empresaBuscada = Acciones.find(empresa => empresa.nombre.includes(string.toUpperCase()))
    console.log(empresaBuscada);
    inputBuscar.value = ''
}

boton.addEventListener("click",() => console.log(carrito))

botonBuscar.addEventListener("click", () => buscarEmpresa(inputBuscar.value))