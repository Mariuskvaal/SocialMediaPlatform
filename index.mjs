import { setRegisterFormListener } from "./register.mjs";
import { setLoginFormListener } from "./login.mjs";
import { updatePost } from "./posts.update.mjs";


const path = location.pathname;

if (path === '/profile/login/') {
    setLoginFormListener()
} else if (path === '/profile/register/') {
    setRegisterFormListener()
}

updatePost({
    id: 644,
    title: "Example post UPDATED",
    body: "Also and example UPDATED"
})






//setRegisterFormListener()
//setLoginFormListener()
