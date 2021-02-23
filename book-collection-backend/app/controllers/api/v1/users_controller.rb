class Api::V1::UsersController < ApplicationController
    def index
        users = User.all
        # render json: users, include: [:books]
        render json: UserSerializer.new(users)
    end

    def create
        #   binding.pry
        if user = User.find_by(name: user_params[:name])
            redirect_to "/api/v1/users/#{user.id}"
        else
            user = User.new(user_params)
            if user.save
               render json: UserSerializer.new(user) 
            else
                render json: {errors: user.errors.full_messages}
            end
            # user = User.create(user_params)
            # # render json: user
            # render json: UserSerializer.new(user)
        end
        
    end

    def show
        user = User.find_by(id: params[:id])
        # render json: user, include: [:books]
        render json: UserSerializer.new(user)
    end

    private

    def user_params
        params.require(:user).permit(:name)
    end
end
