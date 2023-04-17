export function setRegisterFormListener() {
    event.preventDefault()
const form = document.querySelector("#registrerForm");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries())
    console.log("it worked")
})
}

