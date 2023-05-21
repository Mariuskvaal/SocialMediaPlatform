import { API_SOCIAL_URL } from "../api.constant.mjs";

import { authFetch } from "../authFetch.mjs";

const action ="/profiles";
const method = "put";

export async function updateProfile(profileData) {

    if (!profileData.name) {
        throw new Error("update requires a name");
    }

    const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;
    //const token = load("token");

    const response = await authFetch(updateProfileURL, {
        method,
        body: JSON.stringify(profileData)
    })

return await response.json();
}