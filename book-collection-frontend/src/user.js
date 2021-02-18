class User {
    constructor(user){
        this.id = user.id
        this.name = user.name
        this.books = user.books
    }

    static fakeLogin(){
        let form = document.querySelector('#form')
        form.addEventListener("submit", function(e){
            e.preventDefault();
            fetchRequest.findOrCreateUser(e)
            .then(user => {
                let newUser = new User(user)
                newUser.renderUser()
            })
        })
    }
    
    renderUser(){
        const container = document.querySelector('#container')
        container.innerHTML = ''
        let userHTML = `<h1 id=${this.id}>Welcome ${this.name}</h1>`
        container.insertAdjacentHTML('beforeend',userHTML)
    }

}