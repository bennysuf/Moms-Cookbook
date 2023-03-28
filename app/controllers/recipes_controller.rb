class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        user = User.find_by(id: session[:user_id])
        if user
            recipe = Recipe.create!(
                title: params[:title],
                directions: params[:directions],
                user_id: user.id,
                ingredients: params[:ingredients]
                )
            render json: recipe, status: :created
        else
            render json: {errors: "Not logged in"}, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            recipe = Recipe.find_by_id(params[:id])
            byebug
            recipe.update(recipe_params) #? how to update?
            render json: recipe, status: :accepted
        else
            render json: {errors: "Not logged in"}, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            recipe = Recipe.find_by_id(params[:id])
            recipe.destroy
            render json: recipe, status: :no_content
        else
            render json: {errors: "Not logged in"}, status: :unauthorized
        end
    end

    def index
        user = User.find_by(id: session[:user_id])
        if user
            recipe = user.recipes
            render json: recipe, status: :ok
        else
            render json: {errors: "Not logged in"}, status: :unauthorized
        end
    end

    private

    def recipe_params
        params.permit(:title, :directions, :ingredients)
    end

    def render_not_found_response
        render json: { error: "Recipe not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

end
