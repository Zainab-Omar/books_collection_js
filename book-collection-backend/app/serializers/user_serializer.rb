class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :books
  # has_many :books
end
