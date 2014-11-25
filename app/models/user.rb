class User < ActiveRecord::Base
  after_initialize :ensure_session_token
  attr_reader :password, :first_name, :last_name, :location, :img_src
  validates :username, :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    Bcrypt::Password.new(self.password_digest).is_password?(password)
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
