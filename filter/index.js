let products = JSON.parse(localStorage.getItem("productlist")) || [];

const getvalue = (id) => {
  return document.getElementById(id).value;
};
document.getElementById("myform").addEventListener("submit", (event) => {
  event.preventDefault();

  let product = { title: getvalue("title"), price: getvalue("price"),image:getvalue("image"),id:Date.now() };

  products.push(product);
  localStorage.setItem("productlist", JSON.stringify(products));

  uimaker(products)
});

const uimaker = (products) => {

    document.getElementById("container").innerHTML=""
  products.map((product, index)=>{

    let title=document.createElement("h2")
    title.innerHTML=product.title
    let price=document.createElement("p")
    price.innerHTML=product.price
    let image=document.createElement("image")
    image.src=product.image
    let dlt=document.createElement("button")
    dlt.innerHTML="delete"
    dlt.addEventListener("click",()=>{
        products.splice(index,1)
        uimaker(products)
        localStorage.setItem("productlist", JSON.stringify(product));
    })

    let like=document.createElement("button")
    like.innerHTML="add to wishlist"
    like.addEventListener("click",()=>{
    alert("like added")
    })

    let div=document.createElement("div")
    div.append(image,title,price,dlt,like)

    document.getElementById("container").append(div)
  });
};

uimaker(products)

document.getElementById("lth").addEventListener("click", () => {
 
    products.sort((a, b) => Number(a.price) - Number(b.price));
    uimaker(products); 
  
    localStorage.setItem("productlist", JSON.stringify(products)); 
  });

  document.getElementById("htl").addEventListener("click", () => {
 
    products.sort((a, b) => Number(b.price) - Number(a.price));
    uimaker(products); 
  
    localStorage.setItem("productlist", JSON.stringify(products)); 
  });

  const searching=()=>{
 let temp=
  }