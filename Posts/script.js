import { load } from "/storage.mjs";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc0NywibmFtZSI6ImtvbmciLCJlbWFpbCI6ImtvbmcuaGFyYWxkQG5vcm9mZi5ubyIsImF2YXRhciI6IiIsImJhbm5lciI6IiIsImlhdCI6MTY4NDY4MjQyNn0.CEY-hyA-04sW7VJJcXx04WYrh_d1Kiq306gXTO0nyBk";

console.log(token, "name2");

const container = document.querySelector("#postsInHtml");

const errorDisplay = document.querySelector("#posts-error-display");

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
  errorDisplay.innerHTML += '<h3 class="error-code"> No posts Found  </h3>'

   // throw new Error (`HTTP error! status`);
   //console.log(urlWithAuth, "fail"); alert("There is no posts avaliable")
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

//getDataPosts();
