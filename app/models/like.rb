class Like < ActiveRecord::Base 
  validates :user_id, :story_id, presence: true

  belongs_to :user 
  belongs_to :story
end 