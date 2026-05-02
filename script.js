const products = [
  {id: "5001", price: 52.5, img: "images/5001.jpg"},
  {id: "5002A", price: 45, img: "images/5002A.jpg"},
  {id: "5002B", price: 45, img: "images/5002B.jpg"},
  {id: "5003", price: 52.5, img: "images/5003.jpg"},
  {id: "5004", price: 45, img: "images/5004.jpg"},
  {id: "5005", price: 57, img: "images/5005.jpg"},
  {id: "5006", price: 37.5, img: "images/5006.jpg"},
  {id: "5007", price: 0, img: "images/5007.jpg"},
  {id: "5008", price: 250, img: "images/5008.jpg"},
  {id: "5009L", price: 40.5, img: "images/5009L.jpg"},
  {id: "5009M", price: 37.5, img: "images/5009M.jpg"},
  {id: "5010L", price: 40, img: "images/5010L.jpg"},
  {id: "5010M", price: 35, img: "images/5010M.jpg"},
  {id: "5010S", price: 30, img: "images/5010S.jpg"},
  {id: "5011L", price: 44, img: "images/5011L.jpg"},
  {id: "5011M", price: 41, img: "images/5011M.jpg"},
  {id: "5011S", price: 36, img: "images/5011S.jpg"},
  {id: "6001", price: 79, img: "images/6001.jpg"},
  {id: "6002", price: 63, img: "images/6002.jpg"},
  {id: "6003", price: 48, img: "images/6003.jpg"},
  {id: "6004", price: 94, img: "images/6004.jpg"},
  {id: "6005", price: 79, img: "images/6005.jpg"},
  {id: "6006", price: 71, img: "images/6006.jpg"},
  {id: "6007", price: 63, img: "images/6007.jpg"},
  {id: "6008", price: 56, img: "images/6008.jpg"},
  {id: "6009", price: 63, img: "images/6009.jpg"},
  {id: "6010", price: 56, img: "images/6010.jpg"},
  {id: "6011", price: 71, img: "images/6011.jpg"},
  {id: "6012", price: 63, img: "images/6012.jpg"},
  {id: "6013", price: 56, img: "images/6013.jpg"},
  {id: "6014", price: 56, img: "images/6014.jpg"},
  {id: "6015", price: 125, img: "images/6015.jpg"},
  {id: "6016", price: 110, img: "images/6016.jpg"},
  {id: "6017", price: 94, img: "images/6017.jpg"},
  {id: "6018", price: 235, img: "images/6018.jpg"},
  {id: "6019", price: 63, img: "images/6019.jpg"},
  {id: "6020", price: 56, img: "images/6020.jpg"},
  {id: "6021", price: 35, img: "images/6021.jpg"},
  {id: "6022", price: 35, img: "images/6022.jpg"},
];

const container = document.getElementById("productContainer");

products.forEach(p => {
  container.innerHTML += `
    <div class="card" onclick="openProduct('${p.id}', '${p.price}', '${p.img}')">
      <img src="${p.img}">
      <h4>${p.id}</h4>
      <div class="price">₹${p.price}</div>
      <button class="btn">+ Add</button>
    </div>
  `;
});

function openProduct(name, price, img) {
  window.location.href = `product.html?name=${name}&price=${price}&img=${img}`;
}
