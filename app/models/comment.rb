class Comment < ActiveRecord::Base 
  validates :body, :author_id, :story_id, presence: true 

  belongs_to :story

  belongs_to :author,
    class_name: :User

end 