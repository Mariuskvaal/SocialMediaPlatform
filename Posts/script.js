import { load } from "/storage.mjs";

const token = load("token");

const container = document.querySelector("#postsInHtml");

const getDataPosts = async () => {
  const urlWithAuth = await fetch(
    "https://api.noroff.dev/api/v1/social/posts",
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(urlWithAuth, "23");

if (!urlWithAuth.ok) {
   // throw new Error (`HTTP error! status`);
   console.log(urlWithAuth, "fail"); alert("There is no posts avaliable")
  }

  const data = await urlWithAuth.json();
  //console.log(data);

  for (let i = 0; i < data.length; i++) {
    //console.log(data[i]);

    container.innerHTML += `<div class="card"> 
                          <img src=${data[i].media}/>
                            <h2 class="postImages"> ${data[i].title} </h2>
 
                        </div> `;
  }
};

getDataPosts();
