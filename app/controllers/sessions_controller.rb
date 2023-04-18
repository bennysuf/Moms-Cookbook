class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if !user
            render json: { error: "Username non existant" }, status: :unauthorized
        elsif !user&.authenticate(params[:password])
            render json: { error: "Invalid password" }, status: :unauthorized
        elsif user&.authenticate(params[:password]) 
            session[:user_id] = user.id
            render json: user, status: :created
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
