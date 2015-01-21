class User < ActiveRecord::Base
	has_many :images
	validates :username, :email, presence: :true
	validates :username, :email, uniqueness: :true
	has_secure_password


end