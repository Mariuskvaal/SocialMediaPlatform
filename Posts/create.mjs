import { API_SOCIAL_URL } from "/api.constant.mjs";

import { authFetch } from "/authFetch.mjs";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc0NywibmFtZSI6ImtvbmciLCJlbWFpbCI6ImtvbmcuaGFyYWxkQG5vcm9mZi5ubyIsImF2YXRhciI6IiIsImJhbm5lciI6IiIsImlhdCI6MTY4NDY4MjQyNn0.CEY-hyA-04sW7VJJcXx04WYrh_d1Kiq306gXTO0nyBk";
console.log(API_SOCIAL_URL, token, "name");

const action ="/posts";
const method = "post"

export async function createPost(postData) {

    const createPostURL = API_SOCIAL_URL + action;
    console.log(createPostURL)
    //const token = load("token");
    

    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

return await response.json();
}