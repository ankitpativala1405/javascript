export const getValue = (id) => document.getElementById(id).value;

export const isLoggedIn = () => {
  let logged = localStorage.getItem("loggedin") || false;
  console.log("isloggedin:->", logged);
  if (!logged) {
    let user = window.confirm(
      "you have not logged in yet ... \n if you have account 'Click' ok to Create account or \n 'Click' Cancel to Login"
    );
    if (user) {
      window.location.href = "/pages/Signup.html";
    }
  }else{
    window.location.href="/pages/login.html";
  }
  if (!logged) {
    window.location.href = "../pages/login.html";
  }
};
