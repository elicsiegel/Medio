class Story < ActiveRecord::Base 
  validates :title, :body, :author_id, presence: true

  include PgSearch

  before_destroy :delete_attachments

  pg_search_scope :search_for, against: %i(title body category), 
    :using => { 
      :tsearch => {:prefix => true}
    }
  
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy 

  has_many :likers,
    through: :likes,
    source: :user 
  
  has_attached_file :image, default_url: "default_story.png", styles: { thumb: "293x293#", original: "800x800" }

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  
  belongs_to :author,
    foreign_key: :author_id,
    class_name: 'User'

  private 

  def delete_attachments
    self.image = nil 
  end 
end 