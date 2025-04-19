
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
      let request = await fetch(`http://localhost:3000/user?email=${email}`);
      let response = await request.json();
      return response;
    }
  };

  export default apimethod
  