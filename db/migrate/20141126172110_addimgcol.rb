class Addimgcol < ActiveRecord::Migration
  def change
    add_column :businesses, :img_url, :string
  end
end
