class CategoriesController < ApplicationController
    def index
        if !Category.find_by(meal: "Breakfast")
            Category.create(meal: "Breakfast")
            Category.create(meal: "Lunch")
            Category.create(meal: "Dinner")
        end
        category = Category.all
        render json: category, status: :ok
    end
end

# TODO: how to start with categories
