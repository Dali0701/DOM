console.log("JavaScript code is running...");
let prods = [
  {
      id: 5,
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelry",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
          rate: 4.6,
          count: 400,
      },
  },
  {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelry",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
          rate: 3.9,
          count: 70,
      },
  },
  {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelry",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
          rate: 3,
          count: 400,
      },
  },
  {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelry",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
          rate: 1.9,
          count: 100,
      },
  },
];

let container = document.querySelector(".products");
let cartContainer = document.querySelector(".card");
let cart = {};

function renderProducts() {
  container.innerHTML = '';
  prods.forEach((product) => {
      let productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <p>Price: $${product.price}</p>
          <div class="quantity">
              <button onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
      `;
      container.appendChild(productDiv);
  });
}

function addToCart(productId) {
  if (!cart[productId]) {
      cart[productId] = 1;
  } else {
      cart[productId]++;
  }
  document.getElementById("aside").style.display = "block";
  updateCart();
}

function removeFromCart(productId) {
  if (cart[productId]) {
      cart[productId]--;
      if (cart[productId] === 0) {
          delete cart[productId];
      }
      updateCart();
  }
}

function updateCart() {
  cartContainer.innerHTML = "";
  for (const productId in cart) {
      if (cart.hasOwnProperty(productId)) {
          const quantity = cart[productId];
          const product = prods.find((p) => p.id == productId);
          let productDiv = document.createElement("div");
          productDiv.classList.add("product");
          productDiv.innerHTML = `
              <img src="${product.image}" alt="${product.title}">
              <div class="quantity">
                  <button onclick="addToCart(${product.id})">+</button>
                  ${quantity}
                  <button onclick="removeFromCart(${product.id})">-</button> 
              </div>
          `;
          cartContainer.appendChild(productDiv);
      }
  }
}

function toggleComponent() {
  let component = document.getElementById("aside");
  component.style.display = component.style.display === "none" ? "block" : "none";
}


renderProducts();