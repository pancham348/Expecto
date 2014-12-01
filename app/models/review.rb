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
  validates :rating, :content, :user_id, :business_id, presence: true
  validates_uniqueness_of :user_id, scope: :business_id
  belongs_to :business
end
