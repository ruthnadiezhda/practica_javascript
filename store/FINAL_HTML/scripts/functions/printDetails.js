import {changeMini} from "./changeMini.js";
import {changeSubtotal} from "./changeSubtotal.js";
import {saveProduct} from "./saveProduct.js";

export function printDetails(id) {
    console.log(products);
    const product = products.find((each) => each.id === id);
    console.log(product);
    const detailsTemplate = `
    <div id="details" class="columns-container">
    <section class="product-images-block">
    <div class="product-images">
    ${product.images.map(each => `<img class="mini-img" src="${each}" alt="mini" onclick="changeMini(event)" />`).join("")}
    </div>
      <img
        class="big-img"
        id="big-img"
        src="${product.images[0]}"
        alt="MacBook Pro 13'4"
      />
    </section>
    <div class="product-description-block">
      <h1 class="product-title">${product.title}</h1>
      <form class="product-selector">
        <fieldset class="product-fieldset">
          <label class="product-label" for="color">Color</label>
        <select type="text" placeholder="Selecciona un color" id="color">
            ${product.colors.map((each) => `<option value=${each}>${each}</option>`).join("")}
        </select>
        </fieldset>
      </form>
      <div class="product-description">
        <span class="product-label">Descripción</span>
        <p>${product.description}</p>
      </div>
    </div>
    <div class="product-checkout-block">
      <div class="checkout-container">
        <span class="checkout-total-label">Total:</span>
        <h2 class="checkout-total-price">${"$" + product.price.toString()}</h2>
        <p class="checkout-description">
          Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
          50711 haciendo la solicitud en AFIP.
        </p>
        <ul class="checkout-policy-list">
          <li>
            <span class="policy-icon"
              ><img src="./assets/truck.png" alt="Truck"
            /></span>
            <span class="policy-desc"
              >Agrega el producto al carrito para conocer los costos de
              envío</span
            >
          </li>
          <li>
            <span class="policy-icon"
              ><img src="./assets/plane.png" alt="Plane"
            /></span>
            <span class="policy-desc"
              >Recibí aproximadamente entre 10 y 15 días hábiles,
              seleccionando envío normal</span
            >
          </li>
        </ul>
        <div class="checkout-process">
          <div class="top">
            <input type="number" min="1" value="1" onchange="changeSubtotal(event)" id="quantity" />
            <button type="button" class="cart-btn" onclick="saveProduct()" >
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sales-block">
    <h2 class="sales-title">Ofertas de la semana</h2>
    <div id="product-container" class="product-container">
      <a class="product-card" href="./details.html">
        <img
          class="product-img"
          src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
          alt="Kindle Paperwhite"
        />
        <div class="product-info">
          <span class="product-title">Kindle Paperwhite</span>
          <span class="product-description">Black</span>
          <div class="product-price-block">
            <span class="product-price">100000</span>
            <span class="product-discount">50% Off</span>
          </div>
          <div class="product-tax-policy">
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </a>
      <a class="product-card" href="./details.html">
        <img
          class="product-img"
          src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
          alt="Kindle Paperwhite"
        />
        <div class="product-info">
          <span class="product-title">Kindle Paperwhite</span>
          <span class="product-description">Black</span>
          <div class="product-price-block">
            <span class="product-price">100000</span>
            <span class="product-discount">50% Off</span>
          </div>
          <div class="product-tax-policy">
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </a>
      <a class="product-card" href="./details.html">
        <img
          class="product-img"
          src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
          alt="Kindle Paperwhite"
        />
        <div class="product-info">
          <span class="product-title">Kindle Paperwhite</span>
          <span class="product-description">Black</span>
          <div class="product-price-block">
            <span class="product-price">100000</span>
            <span class="product-discount">50% Off</span>
          </div>
          <div class="product-tax-policy">
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </a>
    </div>
  </div>
    `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
}