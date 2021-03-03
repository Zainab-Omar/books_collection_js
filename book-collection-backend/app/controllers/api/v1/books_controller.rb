class Api::V1::BooksController < ApplicationController

    def index
        books = Book.all
        render json: books
    end

    def create
        book = Book.new(book_params)
         if book.save
            render json: book
         else
            render json: {errors: book.errors.full_messages}
          end  
    end

    def destroy
        book = Book.find_by(id: params[:id])
        book.delete
        render json: book
    end

    private
    def book_params
        params.require(:book).permit(:title, :author, :img_url, :user_id)
    end
end
