class CreatePublicComments < ActiveRecord::Migration[5.2]
  def change
    create_table :public_comments do |t|
      t.text :comment
      t.references :user, foreign_key: true
      t.references :ticket, foreign_key: true
      t.boolean :status

      t.timestamps
    end
  end
end
