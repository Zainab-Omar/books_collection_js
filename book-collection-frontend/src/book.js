class Book {
    constructor(book){
        this.id = book.id
        this.title = book.title
        this.author = book.author
        this.img_url = book.img_url
        this.created_at = book.created_at
    }

    static renderBookForm(user_id){
        const book_form = document.querySelector('#book-form')
        let formHTML = `<div id="form-container">
        <h2>Create a new Book</h2>
        <form id="book-form">
        <label>Book Title:</label>
        <input type="text" id="book-title"/><br><br>
        <label>Book Author:</label>
        <input type="text" id="book-author"/><br><br>
        <label>Book Img_url:</label>
        <input type="text" id="book-img"/><br><br>
        <input type="submit"><br><br>
        </form>
        <hr>
        </div>`

    book_form.insertAdjacentHTML('beforeend', formHTML)
    Book.createBook(user_id)

    }

    renderBooks(){
        const books_container = document.querySelector('#books-container')
        let booksHTML = ` <div class="single-book">
        <img src="${this.img_url}" class="image">
        <p>Title: ${this.title}</p>
        <p>Author Name: ${this.author}</p>
        <p>Created_at: ${new Date(this.created_at).toLocaleDateString()}</p>
        <button class="delete" data-book-id=${this.id}>
            Delete
          </button><br><br>
        </div>`

        // let errors = document.querySelector(".errors")
        // errors.remove()
        this.removeErrors()
        books_container.insertAdjacentHTML('beforeend', booksHTML)
        this.removeBook()
        
    }

    static createBook(user_id){
        let book_form = document.querySelector('#book-form')
        book_form.addEventListener("submit", function(e){
            e.preventDefault()
            fetchRequest.createNewBook(e, user_id)
            .then(json => {
                console.log(json.errors)
                if (json.errors){
                    let h2 = document.querySelector("h2")
                   //  console.log(json.errors)
                    json.errors.forEach(error => {
                        let p = `<p class="errors">${error}</p>`
                        h2.insertAdjacentHTML('afterend', p)
                    })
                    }
                    else {
                e.target.reset();
                let newBook = new Book(json)
                newBook.renderBooks()
                    }
                
            })
        })
    }

    removeBook(){
        let books_container = document.querySelector("#books-container")
        books_container.addEventListener("click", function(e){
            if (e.target.classList.contains("delete")){
             let bookId = e.target.dataset.bookId;
             console.log(bookId)
            //  debugger
             fetchRequest.deleteBook(bookId)
             e.target.parentNode.remove()
             
            }
        })
    }
    
    removeErrors(){
        // debugger
        let errors = document.querySelectorAll('.errors');
        if (errors){
            for (let e of errors) {
                e.remove()
            }
        }
    }
}