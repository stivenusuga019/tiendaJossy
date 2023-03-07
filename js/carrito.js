//variables globales
let btn_carrito = document.querySelectorAll(".btn-carrito");
let contaPro = document.querySelector(".conta-pro");
let bolsas = document.querySelector(".bolsa")
let listadocarrito = document.querySelector(".listado-carrito tbody");
let lis_car = document.querySelector(".listado-carrito ");

let conPro = 0;

//recorrer los botones selecionados
for (let i = 0; i < btn_carrito.length; i++) {
    btn_carrito[i].setAttribute("id",(i));
    btn_carrito[i].addEventListener("click",function () {
        let idBoton = btn_carrito[i].getAttribute("id");
        //alert("di click"+(i+1))
        contarPro();
        infoPro(idBoton);
    })   
}
//alerta de productos en el carrito
function contarPro() {
    conPro++;
    contaPro.textContent = conPro;
}

function infoPro(idBtn) {
    let producto;
    if (btn_carrito[idBtn].classList.contains("btn-carrito")) {
        producto = btn_carrito[idBtn].parentElement.parentElement.parentElement;  
    }
    //console.log(producto);
    let infoProducto = {
        "nombre":producto.querySelector(".nombrePro").textContent,
        "imagen":producto.querySelector(".img-fluid").src,
        "precio":producto.querySelector(".precio").textContent
    }
    //console.log(infoProducto);
    agregarAlCarrito(infoProducto);
}
//agregar productos al carrito
function agregarAlCarrito(infoPro) {
    let fila = document.createElement("tr");
    fila.innerHTML= `
        <td>
            <img src="${infoPro.imagen}" width="100"
        </td>
        <td>${infoPro.nombre}</td>
        <td>${infoPro.precio}</td>
        <td>
            <span class="bnt-eliminar text-danger">X</span>
        </td>
    `;
listadocarrito.appendChild(fila);
}

bolsas.addEventListener("click",function(){
 lis_car.style.display= "block"
})



