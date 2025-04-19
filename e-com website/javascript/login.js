import apimethod from "../api/apimethod.js";
import Navbar from "../components/navbar.js";
import { getValue } from "../utils/helper.js";

document.getElementById("navbar").innerHTML = Navbar();

const islogin = async (data) => {
  let users = await apimethod.emailExists(data.email);

  if (users.length === 0) {
    alert("User Not Found .....");
    return;
  } else {
    if (users[0].password !== data.password) {
      alert("Incorrect password.");
      return;
    } else {
      alert("Logged in ... successfully!");
      localStorage.setItem("loggedin", true);
      localStorage.setItem("user", JSON.stringify(users[0]));
      window.open("../index.html", "_self");
    }
  }
};

document.getElementById("loginform").addEventListener("submit", (event) => {
  event.preventDefault();

  let user = {
    email: getValue("email"),
    password: getValue("password"),
  };

  islogin(user);
});
