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
    })
}
