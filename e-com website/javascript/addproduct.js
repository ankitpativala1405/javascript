import { ProductMethod } from "../api/productmethod.js";
import Navbar from "../components/navbar.js";
import { getValue, isLoggedIn } from "../utils/helper.js";
document.getElementById("navbar").innerHTML=Navbar();
let  logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", handleLogout);
}
isLoggedIn()

document.querySelector("#addProductForm").addEventListener("submit", (event) => {
    event.preventDefault(); 

    let Product = {
        name: getValue("productName"),
        decsr: getValue("productDescription"),
        price: getValue("productPrice"),
        img: getValue("productImage")
    };

    ProductMethod.post(Product);
    alert(`your product has been added... `)
});