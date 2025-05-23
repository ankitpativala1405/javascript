const Navbar = () => {
  let isLogged = localStorage.getItem("loggedin") || false;
  let isUser = JSON.parse(localStorage.getItem("user")) || {};
  return `
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                  </li>
                   <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/pages/addproduct.html">Add Product</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/pages/products.html">Product</a>
                  </li>

                  <li class="nav-item">
                  ${
                    isLogged
                      ? `<span class=nav-link active>${isUser.username}</span>`
                      : `<a
                      class="nav-link active"
                      aria-current="page"
                      href="/pages/signup.html"
                      >signup</a>`}
                  </li>
                  <li class="nav-item">
                  ${
                    isLogged
                      ? "<span class=nav-link active onclick=handleLogout()>Logout</span>"
                      : `<a
                      class="nav-link active"
                      aria-current="page"
                      href="/pages/login.html"
                      >login</a
                    >`
                  }
                   
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Order
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/pages/cart.html">Cart Items</a></li>
                      <li><a class="dropdown-item" href="/pages/orderhistory.html">Order History</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" id="SearchValue" placeholder="Search" aria-label="Search">
                </form>
              </div>
            </div>
          </nav>
    `;
};
const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("loggedin");
  window.location.href = "/pages/login.html";
};

window.handleLogout = handleLogout;

export default Navbar;
