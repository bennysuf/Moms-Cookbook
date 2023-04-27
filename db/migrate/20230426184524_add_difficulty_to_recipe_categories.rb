class AddDifficultyToRecipeCategories < ActiveRecord::Migration[7.0]
  def change
    add_column :recipe_categories, :difficulty, :string
  end
end
