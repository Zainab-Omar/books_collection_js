class User {
    constructor(user, userAttributes){
        this.id = user.id
        this.name = userAttributes.name
        this.books = userAttributes.books
        // console.log(this)
    }

    static fakeLogin(){
        let form = document.querySelector('#form')
        form.addEventListener("submit", function(e){
            e.preventDefault();
            fetchRequest.findOrCreateUser(e)
            .then(json => {
                 if (json.errors){
                 let h1 = document.querySelector("#app-title")
                //  console.log(json.errors)
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
        // container.innerHTML = ''
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
        // const books_container = document.querySelector('#books-container')
        if(this.books){
            this.books.forEach(book => {
                // console.log(book)
                let newBook = new Book(book)
                //  console.log(newBook)
                newBook.renderBooks()
                // let booksHTML = `<div id="single-book">
                // <img src="${book.img_url}" class="image">
                // <p>Title: ${book.title}</p>
                // <p>Author Name: ${book.author}</p>
                // </div>`

                // books_container.insertAdjacentHTML('beforeend', booksHTML)

            })
        }
    }


}