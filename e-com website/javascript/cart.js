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

    let td1 = document.createElement("td");
    td1.textContent = item.name;

    let td2 = document.createElement("td");
    td2.textContent = `₹ ${item.price}`;

    let increase = document.createElement("button");
    increase.innerHTML = "+";
    increase.setAttribute("class", "increase-btn");
    increase.addEventListener("click", async () => {
      item.quantity += 1;
      await CartMethod.Update(item.id, { quantity: item.quantity });
      uiMaker(data);
    });

    let decrease = document.createElement("button");
    decrease.innerHTML = "−";
    decrease.setAttribute("class", "decrease-btn");
    decrease.addEventListener("click", async() => {
      item.quantity -= 1;
      await CartMethod.Update(item.id, { quantity: item.quantity });
      uiMaker(data);
    });

    let quantity = document.createElement("span");
    quantity.id = `qty-${item.id}`;
    quantity.innerHTML = item.quantity;

    let qtyCell = document.createElement("td");
    qtyCell.append(decrease, quantity, increase);
    qtyCell.setAttribute("class", "qtyCell");

    let totalCell = document.createElement("td");
    totalCell.innerHTML = `₹ ${total}`;

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    removeBtn.setAttribute("class", "remove-btn");
    removeBtn.addEventListener("click",async()=>{
      await CartMethod.Delete(item.id)
      uiMaker(data)
    })

    let row = document.createElement("tr");
    row.append(td1, td2, qtyCell, totalCell, removeBtn);

    document.getElementById("cart-body").appendChild(row);
  });

  const totalAmount = subtotal + 100.0;
  document.getElementById(
    "subtotal"
  ).textContent = `Subtotal: ₹ ${subtotal.toFixed(2)}`;
  document.getElementById(
    "total"
  ).textContent = `Total: ₹ ${totalAmount.toFixed(2)}`;
};

document.getElementById("WantOrder").addEventListener("click",()=>{
  alert("ordered...")
})