import { load } from "/storage.mjs";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc0NywibmFtZSI6ImtvbmciLCJlbWFpbCI6ImtvbmcuaGFyYWxkQG5vcm9mZi5ubyIsImF2YXRhciI6IiIsImJhbm5lciI6IiIsImlhdCI6MTY4NDY4MjQyNn0.CEY-hyA-04sW7VJJcXx04WYrh_d1Kiq306gXTO0nyBk";

const formButton = document.querySelector("#createPost");

formButton.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(formButton);
  //const data = Object.fromEntries(formData);

  const title = formData.get("title")
  const body = formData.get("body")
  const tags = formData.get("tags")
  const media = formData.get("media")

  const post = {
    title: title,
    body: body,
    media: media,
  }

  post.tags = [tags]
 

  console.log(post);

  fetch('https://api.noroff.dev/api/v1/social/posts', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(post)
  }).then(res => res.JSON())
  .then(post => console.log(post))
  .catch(error => console.log("error") )
})























/*
import { load } from "/storage.mjs";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc0NywibmFtZSI6ImtvbmciLCJlbWFpbCI6ImtvbmcuaGFyYWxkQG5vcm9mZi5ubyIsImF2YXRhciI6IiIsImJhbm5lciI6IiIsImlhdCI6MTY4NDY4MjQyNn0.CEY-hyA-04sW7VJJcXx04WYrh_d1Kiq306gXTO0nyBk";

console.log(token, "name2");

const container = document.querySelector("#postsInHtml");

const errorDisplay = document.querySelector("#posts-error-display");

const createPost = async () => {
  const urlWithAuth = await fetch(
    "https://api.noroff.dev/api/v1/social/posts",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(urlWithAuth, "23");

if (!urlWithAuth.ok) {
  errorDisplay.innerHTML += '<h3 class="error-code"> No posts Found  </h3>'

   //throw new Error (`HTTP error! status`);
   //console.log(urlWithAuth, "fail"); alert("There is no posts avaliable")
  }

  const data = await urlWithAuth.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    //console.log(data[i]);

    container.innerHTML += `<div class="card"> 
                          <img class="postImages" src=${data[i].media}/>
                            <h2 class="postTitle"> ${data[i].title} </h2>
                            <h4 class="postComment"> Comments: ${data[i]._count.comments}</h4>
                            <h4 class="postReaction"> Reactions: ${data[i]._count.reactions}</h4>
                            <h4 class="postReaction"> Tags: ${data[i].tags}</h4>
                        </div> `;
  }
};

createPost();

*/