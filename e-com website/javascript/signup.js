import apimethod from "../api/apimethod.js";
import Navbar from "../components/navbar.js";
import { getValue } from "../utils/helper.js";
document.getElementById("navbar").innerHTML = Navbar();
let  logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", handleLogout);
}

document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault();

  let user = {
    name: getValue("fullName"),
    email: getValue("email"),
    contact: getValue("contact"),
    password: getValue("password"),
  };

  let username =
    user.name.substring(0, 3).toLowerCase() +
    user.contact.substring(user.contact.length - 4);

    user.username = username;

  apimethod.create(user);
  alert(`Created Account successfully \n your user name is ${username}`)
});
