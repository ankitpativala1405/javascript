
document.querySelector("#myform").addEventListener("submit", (event)=> {
    event.preventDefault();


    let data={
        firstname:document.getElementById("firstname").value,
        lastname:document.getElementById("lastname").value,
        email:document.getElementById("email").value
    }

    create(data)
})

const create=async(data)=>{
    let req=await fetch("http://localhost:3000/data",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    let res=await req.json()
}

const getdata = async () => {
    let req = await fetch(
      `http://localhost:3000/data`
    );
    let res = await req.json();
    console.log(res);
    uiMaker(res);
  };

  getdata();

  const uiMaker=(data)=>{

    data.map((ele)=>{

        let td1=document.createElement("td")
        td1.innerHTML=ele.firstname
        let td2=document.createElement("td")
        td2.innerHTML=ele.lastname
        let td3=document.createElement("td")
        td3.innerHTML=ele.email

        let button=document.createElement("button")
        button.innerHTML="delete"
        button.addEventListener("click", async () => {
              let req = await fetch(`http://localhost:3000/data/${ele.id}`, {
                method: "DELETE",
              });
              let res = await req.json();
        })
        let tr=document.createElement("tr")
        tr.append(td1,td2,td3,button)


        document.getElementById("tablebody").append(tr)
    })
  }