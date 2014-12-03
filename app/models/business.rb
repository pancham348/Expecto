# == Schema Information
#
# Table name: businesses
#
#  id           :integer          not null, primary key
#  name         :string(255)      not null
#  location     :string(255)      not null
#  rating       :integer
#  description  :text
#  created_at   :datetime
#  updated_at   :datetime
#  category     :string(255)      not null
#  neighborhood :string(255)      not null
#  img_url      :string(255)
#

class Business < ActiveRecord::Base
  
  validates :name, :location, presence: true
  validates :name, uniqueness: true
  has_many :reviews
  has_many :photos
  has_many(
    :reviewers,
    through: :reviews,
    source: :user
    )
    
end
