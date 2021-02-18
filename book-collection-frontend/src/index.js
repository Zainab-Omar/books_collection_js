console.log("hello")
const BACKEND_URL = 'http://localhost:3000/api/v1/';

document.addEventListener("DOMContentLoaded", function(){
    fakeLogin()
})

function fakeLogin(){
    let form = document.querySelector('#form')
    form.addEventListener("submit", function(e){
        e.preventDefault();
        fetch("http://localhost:3000/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    name: e.target.children[1].value
                } 
            })
        })
        .then(response => response.json())
        .then(json => console.log(json))
    })
}
