class UI {
    constructor(){
        this.profile = document.querySelector('.profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="profile-field col s12">
                <h6>User: ${user.login}</h6>
                <h6>GitHub Homepage: <a class="link">${user.html_url}</a></h6>
                <p><img src="${user.avatar_url}" class="profile-picture" id="profile-picture" alt="profile picture"></p>
            </div>
        `;
    }

    showRepos(repos){
        let reposArrayElements = '';

        repos.forEach(repo => {
            reposArrayElements += `
                <div class="GitHub-field col s12">
                    <p class="git-repository-field">Name: ${repo.name}</p>
                    <p class="git-repository-field">Repository: <a>${repo.html_url}</a></P>
                    <li class="followers">Followers: ${repo.forks_count}</li>
                </div>
            `;

            document.querySelector('.repos').innerHTML = reposArrayElements;
        });

    }
}