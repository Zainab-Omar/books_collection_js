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

    static createBook(user_id){
        let book_form = document.querySelector('#book-form')
        book_form.addEventListener("submit", function(e){
        e.preventDefault()

        fetchRequest.createNewBook(e, user_id)
        .then(json => {
                console.log(json.errors)
                if (json.errors){
                    let h2 = document.querySelector("h2")
                    json.errors.forEach(error => {
                        let p = `<p class="errors">${error}</p>`
                        h2.insertAdjacentHTML('afterend', p)
                    })
                }
                else {
                e.target.reset();
                let newBook = new Book(json)
                newBook.renderBooks()
                // newBook.sortBooks(json)

                }  
            })
        })
    }


    renderBooks(){
        const books_container = document.querySelector('#books-container')

        //  let sortButton = `<button class="sort" id=${this.id}> sort by: </button>`
        //  books_container.insertAdjacentHTML('beforeend', sortButton)

        let booksHTML = ` <div class="single-book">
        <img src="${this.img_url}" class="image">
        <p>Title: ${this.title}</p>
        <p>Author Name: ${this.author}</p>
        <p>Created_at: ${new Date(this.created_at).toLocaleDateString()}</p>
        <button type="button" class="delete" id=${this.id}>
            Delete
          </button><br><br>
        </div>`

        books_container.insertAdjacentHTML('beforeend', booksHTML)
        let button = document.getElementById(`${this.id}`)
        this.removeErrors()  
        this.removeBook(button)

    }

    
    removeBook(button){
        button.addEventListener('click', function(e){
            e.preventDefault()
            fetchRequest.deleteBook(e)
                e.target.parentElement.remove();
        })
    }
    
    
    removeErrors(){
        let errors = document.querySelectorAll('.errors');
        if (errors){
            for (let e of errors) {
                e.remove()
            }
        }
    }

    static sortBooks(booksArray){
        const books_container = document.querySelector('#books-container')
        let sort = document.getElementById('sort')
        sort.addEventListener('click', function(e) {
           console.log("sort is working")
            books_container.innerHTML = ""
            let sortedBooks = booksArray.sort((a, b) => (a.title > b.title) ? 1 : -1)
            console.log(sortedBooks)

            sortedBooks.forEach(book => {
                let newBook = new Book(book)
                newBook.renderBooks()
            })
            
        })
    }
}