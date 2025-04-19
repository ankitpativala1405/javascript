let conatainer = JSON.parse(localStorage.getItem("news")) || [];

const uimaker = (conatainer) => {
    document.getElementById("datalist").innerHTML = ""; 
   
    conatainer.map((news,index) => {

      let title = document.createElement("h1");
      title.innerHTML = news.title;
      let image1 = document.createElement("img");
      image1.src = news.image1;
      let image2 = document.createElement("img");
      image2.src = news.image2;
      let containt = document.createElement("p");
      containt.innerHTML = news.containt;
      let category = document.createElement("p");
      category.innerHTML = news.category;
      let btn = document.createElement("button");
      btn.innerHTML = "Delete";
      btn.addEventListener("click", () => {
        conatainer.splice(index,1)
        uimaker(conatainer)
        localStorage.setItem("news", JSON.stringify(conatainer))
      })
      let div = document.createElement("div");
      div.append(title, image1, image2, containt,category,btn);
  
      document.getElementById("datalist").append(div);
    });
  };
  
  uimaker(conatainer);

document.getElementById("sort").addEventListener("change", () => {
  let sortOption = document.getElementById("sort").value;

  if (sortOption === "latest") {
    conatainer.sort((a, b) => b.id - a.id);
  } else if (sortOption === "oldest") {
    conatainer.sort((a, b) => a.id - b.id);
  }

  uimaker(conatainer);
  localStorage.setItem("news", JSON.stringify(conatainer));
});

document.getElementById("search").addEventListener("input", () => {
  let search = document.getElementById("search").value;

  let filteredData = conatainer.filter(
    (news) =>
      news.title.toLowerCase().includes(search.toLowerCase()) ||
      news.containt.toLowerCase().includes(search.toLowerCase())
  );

  uimaker(filteredData);
});

document.getElementById("category").addEventListener("change", () => {
  let selectedCategory = document.getElementById("category").value;

  if (selectedCategory === "All Categories") {
    uimaker(conatainer);
  } else {
    let filteredData = conatainer.filter(
      (news) => news.category === selectedCategory
    );

    if (filteredData.length === 0) {
      document.getElementById("datalist").innerHTML =
        "<p>No news found for this category.</p>";
    } else {
      uimaker(filteredData);
    }
  }
});