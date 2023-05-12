import { setRegisterFormListener } from "./register.mjs";
import { setLoginFormListener } from "./login.mjs";

import * as templates from "./templates/index.mjs"
import * as post from "./index.api.mjs"


const path = location.pathname;

if (path === '/profile/login/') {
    setLoginFormListener()
} else if (path === '/profile/register/') {
    setRegisterFormListener()
}

async function testTemplate() {
    const posts = await post.getPosts();
    const post = posts.pop()


}
