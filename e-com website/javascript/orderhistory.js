import Navbar from "../components/navbar.js";
import { isLoggedIn } from "../utils/helper.js";
document.getElementById("navbar").innerHTML=Navbar();
let  logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", handleLogout);
}
isLoggedIn()
