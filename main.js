document.addEventListener('DOMContentLoaded', function() {


    const endPoint = 'https://api.github.com/users/david-pr0';
    fetch(endPoint).then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        const profileName = json.name;
        const profileUserName = json.login;
        const avatar = json.avatar_url;
        const repositories = json.public_repos;
        const followers = json.followers;
        const following = json.following;
        const url = json.html_url;

        document.getElementById('profile-name').innerHTML = profileName;
        document.getElementById('profile-username').innerHTML = profileUserName;
        document.getElementById('profile-avatar').setAttribute('src', avatar);
        document.getElementById('repositories').innerHTML = repositories;
        document.getElementById('followers').innerHTML = followers;
        document.getElementById('following').innerHTML = following;
        document.getElementById('profile-link').setAttribute('href', url);
    })
})