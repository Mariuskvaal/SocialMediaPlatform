import { createPost } from "../Posts/create.mjs";

export function setCreatePostFormListener() {

  const form = document.querySelector("#createPost");

  console.log(form);

  if (form) {
    form.addEventListener("submit", async (event) => {
      try {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const post = Object.fromEntries(formData.entries());

        console.log(post, "posts")

        await createPost(post);
       // editContainer.innerHTML = displayMessage("Post created!");
      } catch (error) {
       // editContainer.innerHTML = displayMessage(
        //  "An error occurred. Try again later."
       // );
      }
    });
  }


  // if (form) {

  //   console.log("JumpingIsHealty");

  //   form.addEventListener("submit", (event) => {
  //     console.log("Jumping222")
  //     event.preventDefault();
  //     const form = event.target;
  //     const formData = new FormData(form);
  //     const post = Object.fromEntries(formData.entries());


  //     // Send it to the API
  //     createPost(post);
  //   });
  // }
}


