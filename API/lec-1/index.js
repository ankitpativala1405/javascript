const data=async() => {
let req=await fetch("https://fakestoreapi.com/products");
let res= await req.json();
console.log(res);

res.map((ele)=>{

    let img=document.createElement("img");
    img.src=ele.image;
    img.setAttribute("id","image")

    let id=document.createElement("p");
    id.innerHTML=`Sku ID: WEB00${ele.id}`;

    let title=document.createElement("p");
    title.innerHTML=`Title: ${ele.title}`;

    let price=document.createElement("p");
    price.innerHTML=`Price: ${ele.price}`;

    let category=document.createElement("p");
    category.innerHTML=`Category: ${ele.category}`;

    let div1=document.createElement("div");
    div1.append(price,category)
    div1.setAttribute("id","div1")

    let div=document.createElement("div");
    div.append(img,id,title,div1);
    div.setAttribute("id","div")

    document.getElementById("list").append(div);
})

}

data()

// fetch("https://fakestoreapi.com/producpts")
//    .then(response => response.json())
//    .then(data => {
//         data.map((product) => {

//             let img = document.createElement('img');
//             img.src = product.image;

//             let id = document.createElement('p');
//             id.innerHTML = 'ID:'+ product.id;

//             let title = document.createElement('p');
//             title.innerHTML = 'Title:'+ product.title;

//             let price = document.createElement('p');
//             price.innerHTML = 'Price: $' + product.price;

//             let div = document.createElement('div');
//             div.append(img,id, title, price);

//             document.getElementById('list').append(div);

//         });

//    })

   .catch(error =>{
    document.getElementById('list').innerHTML="Failed to load data."});

   