class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.integer :rating
      t.text :description
      t.timestamps
    end
    add_index(:businesses, :name, unique: true)
  end
end
