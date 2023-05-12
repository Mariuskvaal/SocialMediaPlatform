import { API_SOCIAL_URL } from "../api.constant.mjs";

import { authFetch } from "../authFetch.mjs";

const action ="/posts";
const method = "delete"

export async function updatePost(id) {

    if (!id) {
        throw new Error("delete requires a postID");
    }

    const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;
    //const token = load("token");

    const response = await authFetch(updatePostURL, {
        method
    })

return await response.json();
}