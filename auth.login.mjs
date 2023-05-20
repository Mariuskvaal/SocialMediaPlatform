import { API_SOCIAL_URL } from "./api.constant.mjs";
import * as storage from "/storage.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
        headers: {
            "Content-Type":"application/json"
        },  
        method,
        body
    })

    console.log(response,"login");

    const { accessToken, ...user } = response.json()

   storage.save("token", accessToken)

   storage.save("profile", user)

 

  if(response.ok){alert("You are now logged in"); window.location.assign("/Posts/posts.html");}    
  else{
    alert("User are not registered")
  }

   console.log(response,"login");
}