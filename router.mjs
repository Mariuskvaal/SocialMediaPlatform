import * as listeners from "./handlers/index.mjs";
import * as templates from "/templates/index.mjs"

export default function router() {
  const path = location.pathname;

  console.log(path);

  switch (path) {
    case "/login.html":
      listeners.setLoginFormListener();
      return;
    case "/index.html":
      listeners.setRegisterFormListener();
      return;
    case "/Post/create/create.html":
      listeners.setCreatePostFormListener();
      return;
    case "/post/edit/post.edit.html":
      listeners.setUpdatePostListener();
      return;
    case "/profile.edit.html":
      listeners.setUpdateProfileListener();
      return;
  }
}
