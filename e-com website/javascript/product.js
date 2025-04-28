import { CartMethod } from "../api/cartmethod.js";
import { ProductMethod } from "../api/productmethod.js";
import Navbar from "../components/navbar.js";
import { SearchValue } from "../components/search.js";
import uiMaker from "../components/uimakerproducts.js";
import { isLoggedIn } from "../utils/helper.js";
document.getElementById("navbar").innerHTML = Navbar();
let logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", handleLogout);
}
isLoggedIn();

//iife function
(async () => {
  let products = await ProductMethod.getAll();
  uiMaker(products);
})();

//sort
document.getElementById("SortByPrise").addEventListener("change", async () => {
  let SortValue = document.getElementById("SortByPrise").value;

  let products = await ProductMethod.getAll();

  console.log(products);

  if (SortValue === "lth") {
    products.sort((a, b) => a.price - b.price);
  } else if (SortValue === "htl") {
    products.sort((a, b) => b.price - a.price);
  }
  uiMaker(products);
});

//searching
SearchValue();

//filter

document
  .getElementById("categoryFilter")
  .addEventListener("change", async (e) => {
    let FilterValue = e.target.value;
    console.log(FilterValue);

    let products = await ProductMethod.getAll();
    console.log(products[0].category);

    if (FilterValue == "All") {
      uiMaker(products);
    } else {
      let temp = products.filter((ele) => ele.category == FilterValue);
      uiMaker(temp);
    }
  });
