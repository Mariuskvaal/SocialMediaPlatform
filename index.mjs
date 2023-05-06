import { setRegisterFormListener } from "./register.mjs";
import { setLoginFormListener } from "./login.mjs";
import { createPost } from "./posts.create.mjs";


const path = location.pathname;

if (path === '/profile/login/') {
    setLoginFormListener()
} else if (path === '/profile/register/') {
    setRegisterFormListener()
}

createPost({
    title: "Example posts",
    body: "Also and example"
})






//setRegisterFormListener()
//setLoginFormListener()
