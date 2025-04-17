
document.querySelector("#myform").addEventListener("submit", (event)=> {
    event.preventDefault();


    let data={
        firstname:document.getElementById("firstname").value,
        lastname:document.getElementById("lastname").value,
        email:document.getElementById("email").value
    }

    if(ID==-1){create(data)}
    else{
      update(data)
    }
    
})

let ID=-1;

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

        let update=document.createElement("button")
        update.innerHTML="UPDATE"
        update.addEventListener("click",async ()=>{



          ID=ele.id
          delete ele.id

          // for (const key in data) {
            // console.log(key, data[key]);

          document.getElementById("firstname").value=ele.firstname
          document.getElementById("lastname").value=ele.lastname
          document.getElementById("email").value=ele.email

          document.getElementById("submit").value="UPDATE"

          
        })
        let tr=document.createElement("tr")
        tr.append(td1,td2,td3,button,update)


        document.getElementById("tablebody").append(tr)
    })
  }


  const update=async(data)=>{
    let req=await fetch(`http://localhost:3000/data/${ID}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    let res=await req.json()

    debugger
}