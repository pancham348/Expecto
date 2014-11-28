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

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
