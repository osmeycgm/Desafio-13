import { propiedades_renta } from "./arrays.js";

export const mostrarRentals = () => {
  const container = document.querySelector("#card_rentals");
  let contenidoHTML = "";

  for (const prop of propiedades_renta) {
    contenidoHTML += ` 
        <div class="col-12 col-md-6 col-lg-6 mb-4 d-flex">
          <div class="card w-100">
              <img
                src="${prop.src}"
                class="card-img-top"
                alt="${prop.nombre}"/>
              <div class="card-body">
                <h5 class="card-title">
                  ${prop.nombre}
                </h5>
                <p class="card-text">
                  ${prop.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${prop.habitaciones}
                </p>
                <p>
                  <i class="fa-solid fa-restroom"></i> ${prop.banos}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
                ${prop.piscina ? '<p class="text-success"><i class="fa-solid fa-person-swimming"></i> Piscina </p>' : '<p class="text-danger"><i class="fa-solid fa-person-swimming"></i> Sin piscina</p>'}
                ${prop.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido Fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                ${prop.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas Permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten Mascotas</p>'}
                ${prop.amoblado ? '<p class="text-success"><i class="fa-solid fa-couch"></i> Amoblado</p>' : '<p class="text-danger"><i class="fa-solid fa-couch"></i> No amoblado</p>'}
                ${prop.amenities ? '<p class="text-success"><i class="fa-solid fa-table-tennis-paddle-ball"></i> Ping-pong, taca-taca, gym, lobby, etc.</p>' : '<p class="text-danger"><i class="fa-solid fa-table-tennis-paddle-ball"></i> No amenities incluidos</p>'}
              </div>
          </div>
        </div>`;
  }

  if (container) {
    container.innerHTML = contenidoHTML;
  }
};

mostrarRentals();

