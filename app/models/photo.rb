# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  img_src     :string(255)      not null
#  caption     :text             not null
#  business_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Photo < ActiveRecord::Base
  validates :user_id, :business_id, :img_src, presence: true
  validates_uniqueness_of :user_id, scope: :business_id
  belongs_to :business
  belongs_to :user
end
