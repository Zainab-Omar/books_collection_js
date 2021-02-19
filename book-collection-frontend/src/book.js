class Book {
    constructor(book){
        this.id = book.id
        this.title = book.title
        this.author = book.author
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
        </div>`

    book_form.insertAdjacentHTML('beforeend', formHTML)
    }
}