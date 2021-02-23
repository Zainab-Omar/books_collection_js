class Api::V1::BooksController < ApplicationController
    def index
        books = Book.all
        render json: books
        # render json: BookSerializer.new(books)
    end

    def create
        #   binding.pry
      
            book = Book.new(book_params)
            if book.save
               render json: book
            else
                render json: {errors: book.errors.full_messages}
            # render json: BookSerializer.new(book)
          end  
    end

    def destroy
        # binding.pry
        book = Book.find_by(id: params[:id])
        book.delete
        render json: book
        # render json: BookSerializer.new(books)
    end

    private
    def book_params
        params.require(:book).permit(:title, :author, :img_url, :user_id)
    end
end
