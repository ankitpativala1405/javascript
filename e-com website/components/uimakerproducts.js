import { CartMethod } from "../api/cartmethod.js";

const uiMaker = (data) => {
    document.getElementById("product-container").innerHTML = "";
  
    data.map((product) => {
      let div = document.createElement("div");
      div.className = "card mb-4";
      div.style.width = "18rem";
      div.setAttribute("class", "container");
      div.setAttribute("id", "container");
  
      let img = document.createElement("img");
      img.src = product.img;
      img.className = "card-img-top";
      img.alt = product.name;
  
      let cardBody = document.createElement("div");
      cardBody.className = "card-body";
      cardBody.setAttribute("class","cardbody")
  
      let title = document.createElement("h5");
      title.className = "card-title";
      title.textContent = product.name;
  
      let desc = document.createElement("p");
      desc.className = "card-text";
      desc.textContent = product.decsr;
  
      let price = document.createElement("p");
      price.className = "card-text fw-bold";
      price.textContent = "₹" + product.price;
  
      let button = document.createElement("button");
      button.className = "btn btn-primary";
      button.textContent = "Add to Cart";
      button.setAttribute("id","cart")
      button.addEventListener("click", async () => {
      
        let CartItem=await CartMethod.GetAll();
  
        let IsExist = CartItem.find((item) => item.id === product.id);
  
        if (IsExist) {
          let upadteitem = { ...IsExist, quantity: IsExist.quantity + 1 };
          await CartMethod.Update(IsExist.id, upadteitem);
          alert(`${product.name} has been increase in cart`);
        } else {
          let CartAdd = { ...product, quantity: 1 };
          await CartMethod.Post(CartAdd);
          console.log("Product added to cart.");
          alert(`${product.name} added to cart!`);
        }
      });
  
      cardBody.append(title, desc, price, button);
      div.append(img, cardBody);
  
      document.getElementById("product-container").append(div);
    });
  };

  export default uiMaker