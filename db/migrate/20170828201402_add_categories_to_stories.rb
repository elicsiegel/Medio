class AddCategoriesToStories < ActiveRecord::Migration
  def change
    add_column :stories, :category, :string
  end
end
