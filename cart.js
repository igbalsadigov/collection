const div = document.querySelector(".secondContainer");

function getAllCart() {
  div.innerHTML = "";
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((item, index) => {
    let box = document.createElement("div");
    box.className = "productCard";
    box.innerHTML = `
    <img
         src=${item.thumbnail} alt="">
            <div class="cardDesc">
            <h3>${item.title}</h3>
            <span>${item.brand}</span>
            <strong>${item.price}</strong>
        <button class="cartBtn" onclick="removeItem(${index})">sepetten sil</button>
        </div>
        `;
    div.appendChild(box);
  });
}
function removeItem(productsIndex) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(productsIndex, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  getAllCart();
}
window.onload = () => {
  getAllCart();
};
