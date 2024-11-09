let listProductHTML = document.querySelector(".produk_grid");
let detailProductHTML = document.querySelector(".detail_produk");

const addDataToHTML = () => {
  listProductHTML.innerHTML = "";
  if (listProducts.length > 0) {
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("card");
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            `;

      // Tambahkan event listener untuk menangkap klik pada produk
      newProduct.addEventListener("click", (event) => {
        const productId = event.currentTarget.dataset.id;
        window.location.href = `detail_produk.html?id=${productId}`;
      });

      listProductHTML.appendChild(newProduct);
    });
  }
};

const initApp = () => {
  fetch("../products.json")
    .then((response) => response.json())
    .then((data) => {
      listProducts = data;
      addDataToHTML();
    });
};

initApp();
