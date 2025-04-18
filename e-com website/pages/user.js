import apimethod from "../javascript/apimethod.js";

async function displayUsers() {

    const users = await apimethod.getuser(); 
    console.log(users);
    uiMaker(users)

}
displayUsers();


const uiMaker=(data)=>{

    data.map((ele)=>{

        let td1=document.createElement("td")
        td1.innerHTML=ele.name
        let td2=document.createElement("td")
        td2.innerHTML=ele.email
        let td3=document.createElement("td")
        td3.innerHTML=ele.contact
        let td4=document.createElement("td")
        td4.innerHTML=ele.password

        

        let button=document.createElement("button")
        button.innerHTML="delete"
        button.addEventListener("click", async () => {
              let req = await fetch(`http://localhost:3000/user/${ele.id}`, {
                method: "DELETE",
              });
              let res = await req.json();
        })

        let tr=document.createElement("tr")
        tr.append(td1,td2,td3,td4,button)


        document.getElementById("user").append(tr)
    })
  }
