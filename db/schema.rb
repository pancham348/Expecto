# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141201055739) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: true do |t|
    t.string   "name",         null: false
    t.string   "location",     null: false
    t.integer  "rating"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "category",     null: false
    t.string   "neighborhood", null: false
    t.string   "img_url"
  end

  add_index "businesses", ["name"], name: "index_businesses_on_name", unique: true, using: :btree

  create_table "photos", force: true do |t|
    t.string   "img_src",     null: false
    t.text     "caption",     null: false
    t.integer  "business_id", null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "photos", ["business_id"], name: "index_photos_on_business_id", using: :btree
  add_index "photos", ["user_id"], name: "index_photos_on_user_id", using: :btree

  create_table "reviews", force: true do |t|
    t.integer  "rating",      null: false
    t.text     "content",     null: false
    t.integer  "user_id",     null: false
    t.integer  "business_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reviews", ["business_id"], name: "index_reviews_on_business_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username",                                                                                            null: false
    t.string   "password_digest",                                                                                     null: false
    t.string   "first_name",                                                                                          null: false
    t.string   "last_name",                                                                                           null: false
    t.string   "location"
    t.string   "session_token",                                                                                       null: false
    t.string   "img_src",         default: "https://cdn1.iconfinder.com/data/icons/halloween-6/96/Witch-Hat-512.png"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
