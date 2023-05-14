import { API_SOCIAL_URL } from "../api.constant.mjs";

import { authFetch } from "../authFetch.mjs";

const action ="/profiles";

export async function getProfiles() {
    const updateProfileURL = `${API_SOCIAL_URL}${action}`;

    const response = await authFetch(updateProfileURL)

return await response.json();
}

export async function getProfile(name) {

    if (!id) {
        throw new Error("GEt requires a name");
    }

    const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

    const response = await authFetch(getProfileURL)

return await response.json();
}
