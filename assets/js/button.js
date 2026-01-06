export const boton = (ruta) => {
    location.href = ruta;
}

document.addEventListener('DOMContentLoaded', () => {
    const isInPaginas = location.pathname.includes('/assets/paginas/') || location.pathname.includes('/paginas/');

    const btnSales = document.querySelector(".buttonSales");
    if (btnSales) {
        btnSales.addEventListener("click", () => {
            const ruta = isInPaginas ? './ventas.html' : 'assets/paginas/ventas.html';
            boton(ruta);
        });
    }

    const btnRentals = document.querySelector(".buttonRentals");
    if (btnRentals) {
        btnRentals.addEventListener("click", () => {
            const ruta = isInPaginas ? './rentas.html' : 'assets/paginas/rentas.html';
            boton(ruta);
        });
    }
});