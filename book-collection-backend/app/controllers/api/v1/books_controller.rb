class Api::V1::BooksController < ApplicationController
    def index
        books = Book.all
        render json: books
    end

    def create
        # binding.pry
        book = Book.create(book_params)
        render json: book
    end

    def destroy
        # binding.pry
        book = Book.find_by(id: params[:id]).delete
        render json: book
    end

    private
    def book_params
        params.require(:book).permit(:title, :author, :img_url, :user_id)
    end
end
