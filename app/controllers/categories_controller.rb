class CategoriesController < ApplicationController
    skip_before_action :authorize, only: [:index]
    def create
        check = Category.find_by(category: params[:category])
        if check == nil
            category = Category.create!(category_params)
            render json: category, status: :created
        else 
            render json: {error: "Category exists already"}, status: :unprocessable_entity
        end
    end

    def index
        category = Category.all.order("created_at DESC")
        render json: category, status: :ok
    end

    private 

    def category_params
        params.permit(:category)
    end
end
