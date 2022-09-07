let id = new URLSearchParams(window.location.search).get("id");
let renderDetails = async () => {
  let res = await fetch(
    `https://app.interimapi.com/api/v1/630d451c-b61a-4ab8-b096-41895d5d798c/products/${id}`
  );
  let post = await res.json();
  let html = `
          <div class="row">
        <div class="col-lg-5 text-center" style="width: fit-content">
          <img src="${post.image_url}" alt="" />
        </div>
        <div class="col-lg-4 m-auto">
          <div
            class="product-text flex-column d-flex text-decoration-none fw-bold border-bottom"
          >
           ${post.name}
            <span href="" class="text-decoration-none text-info fw-light"
              >Brand: ${post.name.split(" ")[0]}</span
            >
          </div>
          <div class="product-price fw-bold mt-2 fs-5">${post.price}</div>
          <div class="more-info mt-3">
            All prices include VAT. <br />
            Buy with installments and pay ${
              post.price
            } for 48 months with select banks.
            Learn more
          </div>
          <ul class="d-flex p-0 mt-3">
            <li class="list-group-item text-center">
              <i class="fa-regular fa-money-bill-1"></i>
              <div class="text-info">
                Cash on <br />
                Delivery
              </div>
            </li>
            <li class="list-group-item text-center ms-3">
              <i class="fa-solid fa-truck"></i>
              <div class="text-info">
                Delivered by <br />
                Amazony
              </div>
            </li>
            <li class="list-group-item text-center ms-3">
              <i class="fa-solid fa-lock"></i>
              <div class="text-info">
                Secure <br />
                transaction
              </div>
            </li>
          </ul>
          <hr />
          <div class="more-info mt-1">
            Available at a lower price from other sellers that may not offer
            free Prime shipping.
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card" style="width: 18rem">
            <div class="card-header">
              <h5 class="card-title product-price fw-bold mt-2 fs-4">${
                post.price
              }</h5>
            </div>
            <div class="card-body">
              <div class="delivery">
                <span class="text-info">FREE delivery</span>
                <span class="fw-bold">Tomorrow, August 15.</span> Order within
                <span span class="text-success">15 hrs 44 mins</span>
              </div>
              <div class="availability fw-bold text-success fs-4">In stock</div>
              <div class="quantity mt-1">
                <span>Qty:</span>
                <input
                  type="number"
                  class="text-center"
                  value="1"
                  style="width: 2.4rem"
                />
              </div>
              </div>
              </div>
              </div>
      </div>
        `;

  document.querySelector(".prodDetails").innerHTML = html;
};
window.addEventListener("DOMContentLoaded", () => renderDetails());
