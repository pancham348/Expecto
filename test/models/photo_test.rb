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

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
