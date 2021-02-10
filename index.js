let $name = document.getElementById("name");
let $company = document.getElementById("company");
let $bio = document.getElementById("bio");
let $twitter = document.getElementById("twitter");
let $avatar = document.getElementById("avatar");
let $searchUser = document.getElementById("searchUser");
let $repo = document.getElementById("repo");
let $follow = document.getElementById("follow")
let $dontUser = document.getElementById("dontUser");
let $profile = document.getElementById("profile");
let $created = document.getElementById("created")

async function getUser(){
    
    fetch(`https://api.github.com/users/${searchUser.value}`)
    .then(response => response.json())
    .then(data => {

        if(data.message) {
            $profile.classList.add("dont")
            return $dontUser.classList.toggle("dont")
        }
        if(data){
            $profile.classList.remove("dont")
        }

        $created.innerHTML = data.created_at
        $name.innerHTML = data.name
        $company.innerHTML = data.company
        $bio.innerHTML = data.bio
        $twitter.innerHTML = data.twitter_username
        $avatar.src = data.avatar_url
        $repo.innerText = data.public_repos
        $follow.innerText = data.followers
    }).catch((e) => {
        $profile.classList.add("dont")
        $dontUser.classList.toggle("dont")
    })

    
}