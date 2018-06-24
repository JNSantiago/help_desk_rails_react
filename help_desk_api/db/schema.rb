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

ActiveRecord::Schema.define(version: 2018_06_15_174156) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attachments", force: :cascade do |t|
    t.string "file"
    t.string "filename"
    t.string "type"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contracts", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "organization_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organization_id"], name: "index_contracts_on_organization_id"
    t.index ["user_id"], name: "index_contracts_on_user_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "private_comments", force: :cascade do |t|
    t.text "comment"
    t.bigint "user_id"
    t.bigint "ticket_id"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ticket_id"], name: "index_private_comments_on_ticket_id"
    t.index ["user_id"], name: "index_private_comments_on_user_id"
  end

  create_table "public_comments", force: :cascade do |t|
    t.text "comment"
    t.bigint "user_id"
    t.bigint "ticket_id"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ticket_id"], name: "index_public_comments_on_ticket_id"
    t.index ["user_id"], name: "index_public_comments_on_user_id"
  end

  create_table "services", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sub_services", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.bigint "service_id"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["service_id"], name: "index_sub_services_on_service_id"
  end

  create_table "ticket_statuses", force: :cascade do |t|
    t.string "description"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tickets", force: :cascade do |t|
    t.string "code"
    t.string "title"
    t.text "description"
    t.datetime "close_data"
    t.bigint "ticket_status_id"
    t.integer "caller"
    t.integer "agent"
    t.bigint "service_id"
    t.bigint "sub_service_id"
    t.bigint "organization_id"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organization_id"], name: "index_tickets_on_organization_id"
    t.index ["service_id"], name: "index_tickets_on_service_id"
    t.index ["sub_service_id"], name: "index_tickets_on_sub_service_id"
    t.index ["ticket_status_id"], name: "index_tickets_on_ticket_status_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "contracts", "organizations"
  add_foreign_key "contracts", "users"
  add_foreign_key "private_comments", "tickets"
  add_foreign_key "private_comments", "users"
  add_foreign_key "public_comments", "tickets"
  add_foreign_key "public_comments", "users"
  add_foreign_key "sub_services", "services"
  add_foreign_key "tickets", "organizations"
  add_foreign_key "tickets", "services"
  add_foreign_key "tickets", "sub_services"
  add_foreign_key "tickets", "ticket_statuses"
end
