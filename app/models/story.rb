class Story < ActiveRecord::Base 
  validates :title, :body, :author_id, presence: true
end 