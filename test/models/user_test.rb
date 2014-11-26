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
#  img_src         :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
