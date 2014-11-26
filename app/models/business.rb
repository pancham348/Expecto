# == Schema Information
#
# Table name: businesses
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  location    :string(255)      not null
#  rating      :integer
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Business < ActiveRecord::Base
  
  validates :name, :location, presence: true
  validates :name, uniqueness: true
end
