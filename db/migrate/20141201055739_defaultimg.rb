class Defaultimg < ActiveRecord::Migration
  def change
    change_column :users, :img_src, :string, default: "https://cdn1.iconfinder.com/data/icons/halloween-6/96/Witch-Hat-512.png"
  end
end
