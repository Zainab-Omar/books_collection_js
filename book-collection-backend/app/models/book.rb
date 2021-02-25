class Book < ApplicationRecord
    belongs_to :user
    validates :title, :author, :img_url, presence: true 
end
