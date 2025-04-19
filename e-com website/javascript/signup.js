import apimethod from "../api/apimethod.js";
import Navbar from "../components/navbar.js";
import { getValue } from "../utils/helper.js";
// import apimethod from "./apimethod.js";
document.getElementById("navbar").innerHTML=Navbar();

document.getElementById("signupForm").addEventListener("submit",(event)=>{
    event.preventDefault();

    let user={
        name:getValue("fullName"),
        email:getValue("email"),
        contact:getValue("contact"),
        password:getValue("password")
    }

    // console.log(user);
    // apimethod.create(user)
    apimethod.create(user)
    
})