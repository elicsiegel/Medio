class Follows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false 
      t.integer :followee_id, null: false 
      t.timestamps
    end
  end
end
