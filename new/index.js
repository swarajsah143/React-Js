const URL = "https://jsonplaceholder.typicode.com/posts";

let titleDes = document.querySelectorAll(".title ");
let bodyDes = document.querySelectorAll(".body");

const getData = async () => {
  const response = await fetch(URL);
  let data = await response.json();
  for (let index = 0; index < data.length; index++) {
    titleDes[`${index}`].innerHTML = data[`${index}`].title;
    bodyDes[`${index}`].innerHTML = data[`${index}`].body;
  
  }
};
getData();
