class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.string :code
      t.string :title
      t.text :description
      t.datetime :close_data
      t.references :ticket_status, foreign_key: true
      t.integer :caller
      t.integer :agent
      t.references :service, foreign_key: true
      t.references :sub_service, foreign_key: true
      t.references :organization, foreign_key: true
      t.boolean :status

      t.timestamps
    end
  end
end
