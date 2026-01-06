import { propiedades_renta, propiedades_south, propiedades_venta } from "./arrays.js";

const imgBase = location.pathname.includes('/assets/paginas/') || location.pathname.includes('/paginas/') ? '../img/' : 'assets/img/';

const mostarPropiedades = (arrays, contenedorHTML) => {

  let contenidoHTML = "";
  let count = 0;

  for (const array of arrays) {
    if (count < 2) {
      contenidoHTML += ` 
        <div class="col-12 col-md-6 col-lg-6 mb-4 d-flex">
          <div class="card w-100">
              <img
                src="${imgBase + array.src}"
                class="card-img-top"
                alt="depto"/>
              <div class="card-body">
                <h5 class="card-title">
                  ${array.nombre}
                </h5>
                <p class="card-text">
                  ${array.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${array.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${array.habitaciones} 

                </p>
                 <p>
                  <i class="fa-solid fa-restroom"></i> ${array.banos} 

                </p>
                <p><i class="fas fa-dollar-sign"></i> ${array.costo}</p>
                
                  ${array.piscina ? '<p class="text-success"><i class="fa-solid fa-person-swimming"></i> Pool </p>' : '<p class="text-danger"><i class="fa-solid fa-person-swimming"></i> No Pool    </p>'}
                  ${array.smoke ? '<p class="text-success"> <i class="fas fa-smoking"></i> Smoking allowed  </p>' : ' <p class="text-danger"><i class="fas fa-smoking-ban"></i> No smoking allowed </p>'}
                  ${array.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Pets Friendly </p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No pets allowed</p>'}
                  <p style=> . . . </p>
                </div>
                </div>
        </div> `

      count++;
    }
  }
  if (contenedorHTML) {
    contenedorHTML.innerHTML = contenidoHTML;
  }
};

const cardSantiago = document.querySelector("#card_santiago");
const cardValparaiso = document.querySelector("#card_valparaiso");
const cardSouth = document.querySelector("#card_south");

mostarPropiedades(propiedades_venta, cardSantiago);
mostarPropiedades(propiedades_renta, cardValparaiso);
mostarPropiedades(propiedades_south, cardSouth);

console.log("carga completa");
