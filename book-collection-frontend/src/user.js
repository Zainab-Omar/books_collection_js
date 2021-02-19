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
        // container.innerHTML = ''
        let form = document.querySelector('#form')
        form.remove()
        let userHTML = `<h1 id=${this.id}>Welcome ${this.name}</h1>`
        container.insertAdjacentHTML('afterbegin',userHTML)
        Book.renderBookForm(this.id)
        
    }

    renderExistedBooks(){
        // let books_container = document.querySelector('#books-container')
      
       
    }


}