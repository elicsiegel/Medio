class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title, null: false 
      t.text :body, null: false  
      t.integer :author_id, null: false 
      t.timestamps
    end
  end
end
