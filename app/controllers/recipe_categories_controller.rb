class RecipeCategoriesController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def create
        # TODO: create category, create recipe, create joiner, add data to joiner
        user = find_user
        category = Category.create!( #* will add map later
            meal: params[:category],
            user_id: user.id
        )
        recipe = user.recipes.create!(recipe_params)
        joiner = RecipeCategory.create!(recipe_id: recipe.id, category_id: category.id, difficulty: params[:difficulty])
        render json: joiner, status: :created
    end

    def update
        # TODO: find joiner, find category, update, find recipe, update. update difficulty
        joiner = RecipeCategory.find_by_id(params[:id])
        category = joiner.category #* will add map later / change category to categories.all
        recipe = joiner.recipe
        recipe.update!(recipe_params)
        if params[:category] == "Breakfast" || params[:category] == "Lunch" || params[:category] == "Dinner"
            category.update!(meal: params[:category])
        end
        if params[:difficulty] == "Easy" || params[:difficulty] == "Medium" || params[:difficulty] == "Hard"
            joiner.update!(difficulty: params[:difficulty])
        end
        render json: joiner, status: :accepted
    end

    def destroy
        joiner = RecipeCategory.find_by_id(params[:id])
        joiner.destroy
        render json: {}
    end

    def show
        joiner = RecipeCategory.find_by_id(params[:id])
        render json: joiner, status: :ok
    end

    def index
        joiner = RecipeCategory.all.order("created_at DESC")
        render json: joiner, status: :ok
    end

    private 

    def joiner_params
        params.permit(:id, :title, :directions, :ingredients, :category, :difficulty)
    end

    def recipe_params
        params.permit(:title, :directions, :ingredients)
        # params.require(:recipe).permit(:id, :title, :directions, :ingredients, :category)
    end

end
