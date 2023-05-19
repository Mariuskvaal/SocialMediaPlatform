import { load } from "/storage.mjs";

const token = load("token");

fetch('https://api.noroff.dev/api/v1/social/posts', {
  method:'get',
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
})

.then(response => response.json())
.then(json => console.log(json))






/*

const container = document.querySelector("#container");

Container.innerHTML += `  <a href="details2.html?id=${json[i].id}" class="card">
                          <h2 class="overskrifblogg">${json[i].title.rendered}</h2>
                          <div class="rendered"> ${json[i].content.rendered} </div>
</a>` ;


*/



/*
const getData = () => {
  fetch('https://api.noroff.dev/api/v1/social/posts').then(Response => {
    console.log(response);
  })
}





//console.log("hello world");

function fetchImagefromAPI() {
    const apiKey = 'YOUR_API_KEY';
    fetch('https://api.noroff.dev/api/v1/posts', {
      method: 'GET',
      headers: {
       
      }
    })
   }*/