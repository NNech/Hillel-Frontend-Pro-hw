const API = "https://api.github.com/users/";

const searchField = document.querySelector("#searchField");
const searchUsernameBtn = document.querySelector("#searchUsernameBtn");
const usersContent = document.querySelector("#users");

searchUsernameBtn.addEventListener("click", onSearchButtonClick);

let user;

function onSearchButtonClick(e) {
    getUsers(e);
}

function getUsers() {
    fetch(API + searchField.value)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                Promise.reject(new Error("Error!"));
                alert(response.status + "\n Incorrect user credentials!");
            }
        })
        .then((jsonObj) => {
            createNode(jsonObj);
        });
}

function createNode(userData) {
    user = setupUserContent(userData);

    addAvatarContent();

    addUserDataContent("Repos", user.repos);
    addUserDataContent("Followers", user.followers);
    addUserDataContent("Following", user.following);
}

function setupUserContent(user) {
    return {
        avatar: user.avatar_url,
        repos: user.public_repos,
        followers: user.followers,
        following: user.following,
    };
}

function addUserDataContent(contentName, contentValue) {
    let p = document.createElement("p");
    p.textContent = contentName + ": " + contentValue;
    usersContent.append(p);
}

function addAvatarContent() {
    usersContent.innerHTML = `<img src=${user.avatar} alt='Logo'/>`;
}
