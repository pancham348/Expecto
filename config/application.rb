require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Expecto
  class Application < Rails::Application
    config.filepicker_rails.api_key = "Ap7rUwceyTBiz0IfLJUgkz"
  end
end
