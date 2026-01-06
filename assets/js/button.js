export const boton= (ruta) =>{
    location.href = ruta
} 

const btnSales = document.querySelector(".buttonSales");
if (btnSales) {
    btnSales.addEventListener("click", () => {
        boton("/assets/paginas/ventas.html");
    });
}

const btnRentals = document.querySelector(".buttonRentals");
if (btnRentals) {
    btnRentals.addEventListener("click", () => {
        boton("/assets/paginas/rentas.html");
    });
}