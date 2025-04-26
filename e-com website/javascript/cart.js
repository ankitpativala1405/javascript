import { CartMethod } from "../api/cartmethod.js";
import Navbar from "../components/navbar.js";
import { isLoggedIn } from "../utils/helper.js";
document.getElementById("navbar").innerHTML = Navbar();
let logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", handleLogout);
}
isLoggedIn();

//iife function

(async () => {
  let CartItem = await CartMethod.GetAll();
  console.log("cart", CartItem);

  uiMaker(CartItem);
})();

const uiMaker = (data) => {
  let subtotal = 0;

  document.getElementById("cart-body").innerHTML = "";

  data.forEach((item) => {
    const total = item.price * item.quantity;
    subtotal += total;

    const row = `
      <tr>
        <td>${item.name}</td>
        <td>₹ ${item.price}</td>
        <td>${item.quantity}</td>
        <td>₹ ${total}</td>
        <td><button class="remove-btn" data-id="${item.id}">Remove</button></td>
      </tr>
    `;
    document.getElementById("cart-body").innerHTML += row;
  });

  const totalAmount = subtotal + 100.0;
  document.getElementById("subtotal").innerText = `Subtotal: ₹ ${subtotal.toFixed(2)}`;
  document.getElementById("total").innerHTML = `Total: ₹ ${totalAmount.toFixed(
    2
  )}`;
};
