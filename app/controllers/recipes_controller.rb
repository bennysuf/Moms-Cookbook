class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    #! Unpermitted parameter: :recipe. 
    #? how to work around it

    def create
        user = find_user
        if user
            category = Category.find_by(meal: params[:category])
            recipe = Recipe.create!(
                title: params[:title],
                directions: params[:directions],
                user_id: user.id,
                ingredients: params[:ingredients]
                )
            joiner = RecipeCategory.create(recipe_id: recipe.id, category_id: category.id)
            render json: recipe, status: :created
        end
    end

    def update
        user = find_user
        if user
            recipe = Recipe.find_by_id(params[:id])
            joiner = RecipeCategory.find_by(recipe_id: recipe.id, category_id: recipe.categories.ids) 
            category = Category.find_by(meal: params[:category])
            # recipe.update(recipe_params) #? how to update?
            recipe.update!(
                title: params[:title],
                directions: params[:directions],
                ingredients: params[:ingredients]
            )
            joiner.update(category_id: category.id)
            render json: recipe, status: :accepted
        end
    end

    def destroy
        user = find_user
        if user
            recipe = Recipe.find_by_id(params[:id]) #?unxepeted Unexpected end of JSON input
            recipe.destroy
            head :no_content
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

    def find_user 
        User.find_by(id: session[:user_id])
    end

    def recipe_params
        params.permit(:id, :title, :directions, :ingredients)
    end

    def render_not_found_response
        render json: { error: "Recipe not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

end
