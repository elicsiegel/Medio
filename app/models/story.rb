class Story < ActiveRecord::Base 
  validates :title, :body, :author_id, presence: true

  include PgSearch

  pg_search_scope :search_for, against: %i(title body)
  
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy 

  has_many :likers,
    through: :likes,
    source: :user 
  
  has_attached_file :image, default_url: "default_story.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  
  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'
end 