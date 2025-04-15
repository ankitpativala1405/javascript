let conatainer = JSON.parse(localStorage.getItem("news")) || [];

const getvalue = (id) => {
  return document.getElementById(id).value;
};

document.getElementById("myform").addEventListener("submit", (event) => {
  event.preventDefault();

  let news = {
    title: getvalue("title"),
    image1: getvalue("image1"),
    image2: getvalue("image2"),
    containt: getvalue("containt"),
    category:getvalue("category"),
    id: Date.now(),
  };

  conatainer.push(news);

  localStorage.setItem("news", JSON.stringify(conatainer));

});