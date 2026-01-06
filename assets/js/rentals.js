import { propiedades_renta } from "./arrays.js";

export const mostrarRentals = () => {
  const container = document.querySelector("#card_rentals");
  let contenidoHTML = "";

  for (const prop of propiedades_renta) {
    contenidoHTML += ` 
        <div class="col-12 col-md-6 col-lg-6 mb-4 d-flex">
          <div class="card w-100">
              <img
                src="${new URL('../img/' + prop.src, import.meta.url).href}"
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
                ${prop.piscina ? '<p class="text-success"><i class="fa-solid fa-person-swimming"></i> Pool </p>' : '<p class="text-danger"><i class="fa-solid fa-person-swimming"></i> No Pool</p>'}
                ${prop.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Smoking allowed</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No smoking allowed</p>'}
                ${prop.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Pets Friendly</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No pets allowed</p>'}
                ${prop.amoblado ? '<p class="text-success"><i class="fa-solid fa-couch"></i> Furnished</p>' : '<p class="text-danger"><i class="fa-solid fa-couch"></i> No Furnished</p>'}
                ${prop.amenities ? '<p class="text-success"><i class="fa-solid fa-table-tennis-paddle-ball"></i> Ping-pong, taca-taca, gym, lobby, etc.</p>' : '<p class="text-danger"><i class="fa-solid fa-table-tennis-paddle-ball"></i> No amenities included</p>'}
              </div>
          </div>
        </div>`;
  }

  if (container) {
    container.innerHTML = contenidoHTML;
  }
};

mostrarRentals();

