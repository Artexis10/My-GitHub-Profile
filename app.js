const github = new GitHub;
const ui = new UI;

github.getUserData()
.then(data => {
    console.log(data.profile);
    console.log(data.repos);
    ui.showProfile(data.profile);
    ui.showRepos(data.repos);
});