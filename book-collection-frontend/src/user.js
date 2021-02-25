class User {
    constructor(user, userAttributes){
        this.id = user.id
        this.name = userAttributes.name
        this.books = userAttributes.books
    }

    static fakeLogin(){
        let form = document.querySelector('#form')
        form.addEventListener("submit", function(e){
            e.preventDefault();
            fetchRequest.findOrCreateUser(e)
            .then(json => {
                 if (json.errors){
                 let h1 = document.querySelector("#app-title")
                 let p = `<p class="errors">${json.errors}</p>`
                 h1.insertAdjacentHTML('afterend', p)
                 }
                let user = json.data
                let newUser = new User(user, user.attributes)
                newUser.renderUser()
            })
        }) 
    }
    
    renderUser(){
        const container = document.querySelector('#container')
        let form = document.querySelector('#form')
        let appTitle = document.querySelector('#app-title')
        form.remove()
        appTitle.remove()
        let userHTML = `<h1 id=${this.id}>Welcome ${this.name}</h1>`
        container.insertAdjacentHTML('afterbegin',userHTML)
        Book.renderBookForm(this.id)
        this.renderExistedBooks()   
    }

    renderExistedBooks(){
        if(this.books){
            this.books.forEach(book => {
                let newBook = new Book(book)
                newBook.renderBooks()
            })
        }
    }

}