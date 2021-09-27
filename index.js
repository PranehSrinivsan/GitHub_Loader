const gitForm = document.getElementById('gitForm');

gitForm.addEventListener('submit', (e) => {
    
    e.preventDefault();

    let username = document.getElementById('gitUsername');

    let gitUsername = username.value;          

    requestUserRepos(gitUsername);

})


function requestUserRepos(owner){
    
    const xhr = new XMLHttpRequest();

    const url = `https://api.github.com/users/${owner}/repos`;
    //const url=`https://mini-git.fsdev.org/repositories/{owner}/{repository}/commits/{oid}`;
    //const url=`https://mini-git.fsdev.org/repositories/{owner}/{repository}/commits/{oid}/diff`;
   
    xhr.open('GET', url, true);
    
    xhr.onload = function () {

        alert('Retriving');
        const data = JSON.parse(this.response);

        console.log(data);
        
        for (let i in data) {

            let ul = document.getElementById('userRepos');
    
            let li = document.createElement('li');
            
            li.classList.add('list-group-item');
        
            li.innerHTML = (`
                <p><b> Repo: </b> ${data[i].name}</p>
                <p><b> Description: </b> ${data[i].description}</p>
                <p><b> URL: </b> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
            `);
            ul.appendChild(li);
        }
    }
    
    xhr.send();    
}