 let cart12 = [];
    let total12 = 0;

    function addToCart(product12, price12) {
      cart12.push({ product12, price12 });
      total12 += price12;
      displayCart();
    }

    function displayCart() {
      const cartItems = document.getElementById("cart12-items");
      cartItems.innerHTML = "";
      cart.forEach((item, index) => {
        cartItems.innerHTML += `<li>${item.product12} - $${item.price12}</li>`;
      });
      document.getElementById("cart12-total").innerText = total12;
    }