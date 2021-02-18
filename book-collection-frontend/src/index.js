console.log("hello")
const fetchRequest = new FetchRequest()

document.addEventListener("DOMContentLoaded", function(){
    fakeLogin()
})

function fakeLogin(){
    let form = document.querySelector('#form')
    form.addEventListener("submit", function(e){
        e.preventDefault();
        fetchRequest.findOrCreateUser(e)
        .then(json => renderUser(json))
    })
}

function renderUser(user){
    const container = document.querySelector('#container')
    container.innerHTML = ''
    let userHTML = `<h1 id=${user.id}>Welcome ${user.name}</h1>`
    container.insertAdjacentHTML('beforeend',userHTML)
}
