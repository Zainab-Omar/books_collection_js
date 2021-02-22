class Api::V1::BooksController < ApplicationController
    def index
        books = Book.all
        render json: books
    end

    def create
        #  binding.pry
        #  user = User.find_by(id:params[:book][:user_id])
        #  if user.books.find_by(title: params[:book][:title])
        #     render json{message: "Book Already Exist"}
        #  else
            book = Book.create(book_params)
            render json: book
        #  end  
    end

    def destroy
        # binding.pry
        book = Book.find_by(id: params[:id])
        book.delete
        render json: book
    end

    private
    def book_params
        params.require(:book).permit(:title, :author, :img_url, :user_id)
    end
end
