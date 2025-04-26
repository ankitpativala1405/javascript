export const getValue=(id)=>document.getElementById(id).value;

export const isLoggedIn = () => {
      let logged = localStorage.getItem("loggedin") || false;
      console.log("isloggedin:->",logged);
      
      if (!logged) {
        window.location.href = "../pages/login.html";
      }

  };