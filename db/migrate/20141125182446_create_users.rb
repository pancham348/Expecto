class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :location
      t.string :session_token, null: false
      t.string :img_src
      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
