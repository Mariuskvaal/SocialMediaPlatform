import { setRegisterFormListener } from "./register.mjs";
import { setLoginFormListener } from "./login.mjs";

const path = location.pathname;

if (path === '/profile/login/') {
    setLoginFormListener()
} else if (path === '/profile/register/') {
    setRegisterFormListener()
}

setRegisterFormListener()
setLoginFormListener()