class Api::V1::UsersController < ApplicationController

    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def create
        if user = User.find_by(name: user_params[:name])
            redirect_to "/api/v1/users/#{user.id}"
        else
            user = User.new(user_params)
            if user.save
               render json: UserSerializer.new(user) 
            else
                render json: {errors: user.errors.full_messages}
            end
        end   
    end

    def show
        user = User.find_by(id: params[:id])
        render json: UserSerializer.new(user)
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end
end
