# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  rating      :integer          not null
#  content     :text             not null
#  user_id     :integer          not null
#  business_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Review < ActiveRecord::Base
  validates :rating, :content, :user_id, :buisiness_id, presence: true
  validates :user_id, :buisiness_id, uniqueness: true
  belongs_to :user
  belongs_to :business
end
