import { API_SOCIAL_URL } from "/api.constant.mjs";

import { authFetch } from "/authFetch.mjs";

console.log(API_SOCIAL_URL);

const action ="/posts";
const method = "post"

export async function createPost(postData) {
    console.log(postData);
    const createPostURL = API_SOCIAL_URL + action;
    //const token = load("token");
    

    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

return await response.json();
}