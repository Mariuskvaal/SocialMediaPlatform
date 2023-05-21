import { API_SOCIAL_URL } from "../api.constant.mjs";

import { authFetch } from "../authFetch.mjs";

const action ="/posts";
const method = "put";

export async function updatePost(postData) {

    if (!postData.id) {
        throw new Error("update requires a postID");
    }

    const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;
    //const token = load("token");

    const response = await authFetch(updatePostURL, {
        method,
        body: JSON.stringify(postData)
    })

return await response.json();
}