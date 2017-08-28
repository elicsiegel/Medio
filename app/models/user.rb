class User < ActiveRecord::Base 
  validates :username, :session_token, presence: true
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :comments, dependent: :destroy

  has_many :likes, dependent: :destroy

  has_many :liked_stories,
    through: :likes,
    source: :story

  has_many :follows,
    foreign_key: :followee_id,
    class_name: :Follow,
    dependent: :destroy

  has_many :followers,
    through: :follows,
    source: :follower

  has_many :following,
    foreign_key: :follower_id,
    class_name: :Follow,
    dependent: :destroy

  has_many :followees,
    through: :following,
    source: :followee 

  has_attached_file :image, default_url: "default_user.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return user if user && BCrypt::Password.new(user.password_digest).is_password?(password)
    nil
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

end 