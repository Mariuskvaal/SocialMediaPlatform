import { updatePost } from "../Posts/index.mjs";

console.log(location.pathname)

export function setUpdatePostListener() {
const form = document.querySelector("#updatePost");

const url = new URL(location.href);
const id = url.searchParams.get("id");

if (form) { 
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event.preventDefault());
    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries())
    post.id = id;

    // Send it to the API
    updatePost(post)
    })
  }
}