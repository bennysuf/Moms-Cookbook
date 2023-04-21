class AddRowToCategories < ActiveRecord::Migration[7.0]
  def change
    add_column :categories, :user_id, :string
  end
end
