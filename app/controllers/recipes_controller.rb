class RecipesController < ApplicationController

    def create
        user = find_user
        category = Category.find_by(category: params[:category])
        if category == nil 
            render json: {error: "Select a category"}, status: :unprocessable_entity
        else
            recipe = user.recipes.create!(
                title: params[:title], 
                directions: params[:directions],
                ingredients: params[:ingredients],
                category_id: category.id
                )
            render json: recipe, status: :created
        end
    end

    def update
        category = Category.find_by(category: params[:category])
        recipe = Recipe.find_by_id(params[:id])
        recipe.update!(
            title: params[:title], 
            directions: params[:directions],
            ingredients: params[:ingredients],
            category_id: category.id
            )
        render json: recipe, status: :accepted 
    end

    def destroy
        recipe = Recipe.find_by_id(params[:id])
        recipe.destroy
        render json: {}
    end

    def show
        user = find_user
        recipe = user.recipes.all
        render json: recipe, status: :ok
    end

    def index 
        recipe = Recipe.all.order("created_at DESC")
        render json: recipe, status: :ok
    end

    private

    def recipe_params
        params.require(:recipe).permit(:id, :title, :directions, :ingredients, :category)
    end
end
