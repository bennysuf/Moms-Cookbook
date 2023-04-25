class RecipesController < ApplicationController

    def create
        user = find_user
        if user 
            category = Category.create!(
                meal: params[:category],
                user_id: user.id
            )
                recipe = user.recipes.create!(recipe_params)
                joiner = RecipeCategory.create!(recipe_id: recipe.id, category_id: category.id)
                render json: recipe, status: :created
        end
    end

    def update
        user = find_user
        if user
        recipe = Recipe.find_by_id(params[:id])
        category = recipe.categories.first
            joiner = RecipeCategory.find_by(recipe_id: params[:id], category_id: category.id) 
            recipe.update!(recipe_params)
            category.update!(meal: params[:category])
            joiner.update!(category_id: category.id)
            render json: recipe, status: :accepted
        end
    end

    def destroy
        user = find_user
        if user
            recipe = Recipe.find_by_id(params[:id]) #?unxepeted Unexpected end of JSON input
            recipe.destroy
            render json: {}
        end
    end

    def show
        user = find_user
        if user
            recipe = Recipe.find_by_id(params[:id])
            render json: recipe, status: :ok
        end
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
