class Addcols < ActiveRecord::Migration
  def change
    add_column :businesses, :category, :string
    change_column :businesses, :category, :string, null: false
    add_column :businesses, :neighborhood, :string
    change_column :businesses, :neighborhood, :string, null: false
  end
end
