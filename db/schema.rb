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

ActiveRecord::Schema.define(version: 20141218130118) do

  create_table "cards", force: true do |t|
    t.date     "birthday"
    t.date     "deceasedon"
    t.text     "poem"
    t.string   "province"
    t.string   "birthplace"
    t.string   "lastresidence"
    t.text     "signed"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "input_front"
    t.string   "name"
    t.text     "parting_information"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "street_name"
    t.string   "house_number"
    t.string   "addition"
    t.string   "zip_code"
    t.string   "address"
    t.string   "email"
    t.string   "phone_number"
    t.date     "shipping_date"
    t.string   "quantity"
    t.string   "country"
  end

  create_table "pictures", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "card_id"
  end

end
