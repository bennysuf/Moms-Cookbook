class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user = find_user
        render json: user, status: :ok
    end

    def index
        user = User.all
        render json: user, status: :ok
    end

    private 

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
