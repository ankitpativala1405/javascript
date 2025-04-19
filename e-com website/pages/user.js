
import apimethod from "../api/apimethod.js";

async function displayUsers() {

    const users=await apimethod.getuser();
    console.log(users);
    uiMaker(users)

}
displayUsers();


const uiMaker = (data) => {
  data.map((ele) => {
    let table = document.createElement("table");
    table.style.border = "2px solid black";
    table.style.borderCollapse = "collapse"; // Important for proper border display

    let td1 = document.createElement("td");
    td1.innerHTML = ele.name;
    td1.style.border = "1px solid black"; // Add borders to each cell

    let td2 = document.createElement("td");
    td2.innerHTML = ele.email;
    td2.style.border = "1px solid black";

    let td3 = document.createElement("td");
    td3.innerHTML = ele.contact;
    td3.style.border = "1px solid black";

    let td4 = document.createElement("td");
    td4.innerHTML = ele.password;
    td4.style.border = "1px solid black";

    let button = document.createElement("button");
    button.innerHTML = "delete";
    button.addEventListener("click", async () => {
      let req = await fetch(`http://localhost:3000/user/${ele.id}`, {
        method: "DELETE",
      });
      let res = await req.json();
      console.log("Deleted:", res);
    });

    let td5 = document.createElement("td");
    td5.appendChild(button);
    td5.style.border = "1px solid black";

    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5);

    let tbody = document.createElement("tbody");
    tbody.appendChild(tr);
    table.appendChild(tbody);

    document.getElementById("user").appendChild(table);
  });
};

