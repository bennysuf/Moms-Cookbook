class UsersController < ApplicationController

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
        if user
            render json: user, include: ['recipes', 'recipes.categories'], status: :ok
        else
            render json: {errors: "Not authorized"}, status: :unauthorized
        end
    end

    def index
        user = find_user
        if user
            user = User.all
            render json: user, include: ['recipes', 'recipes.categories'], status: :ok
        else
            render json: {errors: "Not authorized"}, status: :unauthorized
        end
    end

    private 

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
