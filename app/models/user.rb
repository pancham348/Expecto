# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)      not null
#  password_digest :string(255)      not null
#  first_name      :string(255)      not null
#  last_name       :string(255)      not null
#  location        :string(255)
#  session_token   :string(255)      not null
#  img_src         :string(255)      default("https://cdn1.iconfinder.com/data/icons/halloween-6/96/Witch-Hat-512.png")
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates :username, :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  has_many :reviews
  has_many :photos
  
  after_initialize :ensure_session_token
  attr_reader :password
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_session_token!
  		self.session_token = SecureRandom::urlsafe_base64
  		self.save!
  		self.session_token
  	end

  	def ensure_session_token
  		self.session_token ||= SecureRandom::urlsafe_base64
  	end

  	def self.find_by_credentials(username, password)
  		user = User.find_by(username: username)
  		return nil if user.nil?
  		if user.is_password?(password)
  			return user
  		else
  			return nil
  		end
  	end
    
end
