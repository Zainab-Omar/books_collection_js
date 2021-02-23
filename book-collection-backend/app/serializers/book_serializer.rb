class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :img_url, :user_id
  # belongs_to :user
end
