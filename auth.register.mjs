import { API_SOCIAL_URL } from "./api.constant.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {

    console.log(action);

    const registerURL = API_SOCIAL_URL + action;

    console.log(registerURL);
}