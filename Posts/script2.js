import { load } from "/storage.mjs";

const token = load("token");

const container = document.querySelector("#postsInHtml");

const getDataPosts = async () => {

  const urlWithAuth = await fetch('https://api.noroff.dev/api/v1/social/posts', {
  method:'get',
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  }
})  
/*
if (!Response.ok) {
    throw new Error (`HTTP error! status`);
  }
*/

  const data = await urlWithAuth.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    console.log(json[i]);

  container.innerHTML += `<div class="rapperForPosts"> 
                            <h3> ${data.id}   </h3>
                            <p> ${data.title} </p>
                        </div> `

}

getDataPosts();
// ...container
