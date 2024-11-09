// Mendapatkan ID produk dari URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

fetch("../products.json")
  .then(response => response.json())
  .then(data => {
    const product = data.find(item => item.id == productId);
    if (product) {
      // Tampilkan detail produk sesuai dengan ID
      document.querySelector(".detail_produk").innerHTML = `
        <h1><a href="produk.html">Produk</a> > ${product.name}</h1>
        <div class="container">
            <img src="${product.image}" alt="${product.name}">
            <div class="konten">
                <div class="judul">
                    <h1>${product.name}</h1>
                </div>
                <div class="deskripsi">
                    <div class="bagian">
                        <h3>Netto</h3>
                        <p>${product.netto}</p>
                    </div>
                    <div class="bagian">
                        <h3>Deskripsi Produk</h3>
                        <p>${product.deskripsi}.</p>
                    </div>
                </div>
            </div>
        </div>
      `;
    }
  });
