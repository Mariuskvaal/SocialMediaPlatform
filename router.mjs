import * as listeners from "./handlers/index.mjs";

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
    case "/post/create/create.html":
      listeners.setCreatePostFormListener();
      return;
    case "/post/edit/":
      listeners.setUpdatePostListener();
      return;
    case "/profile/edit/":
      listeners.setUpdateProfileListener();
      return;
  }
}
