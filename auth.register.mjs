import { API_SOCIAL_URL } from "./api.constant.mjs";

const action = "/auth/register";
const method = "post";

const registerText = document.querySelector(".reg-message");

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();

  console.log(result);

  if (result) {
    alert("You are now registered");
  } else {
    console.log(result);
    alert("failed to registered");
  }

  return result;
}
