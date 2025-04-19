
let apimethod = {
    create: async (data) => {
      const request = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      return request;
    },
    getuser: async()=>{
        const request = await fetch("http://localhost:3000/user",{
            method:"GET"
        })
        let response=request.json()
        return response;
    },
    update:async(data,id)=>{
        const request =await fetch ("http://localhost:3000/user",{
            method:"PATCH",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
    },
    emailExists: async (email) => {
      let requestemail = await fetch(`http://localhost:3000/user?email=${email}`);
      let responseemail = await requestemail.json();
      
      if(responseemail.length >0){
        return responseemail;
      }

      let requestusername=await fetch(`http://localhost:3000/user?username=${email}`)
      let responceusername = await requestusername.json();
      return responceusername
      
    }
  };

  export default apimethod

  