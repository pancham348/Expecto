class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :img_src, null: false
      t.text :caption, null: false
      t.integer :business_id, null: false
      t.integer :user_id, null: false
      
      t.timestamps
    end
    add_index :photos, :business_id
    add_index :photos, :user_id
  end
end
