class Story < ActiveRecord::Base 
  validates :title, :body, :author_id, presence: true

  has_attached_file :image, default_url: "default_story.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  
  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'
end 