import { API_SOCIAL_URL } from "./api.constant.mjs";

import { authFetch } from "./authFetch.mjs";

const action ="/posts";
const method = "post"

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action;
    //const token = load("token");



    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

return await response.json();
}