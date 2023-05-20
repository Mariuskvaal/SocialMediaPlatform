import { createPost } from "../Posts/index.mjs";

export function setCreatePostFormListener() {

  const form = document.querySelector("#createPost");

  console.log(form);


  if (form) {

    console.log("JumpingIsHealty");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());


      // Send it to the API
      createPost(post);
    });
  }
}


