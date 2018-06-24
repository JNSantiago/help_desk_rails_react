class CreateSubServices < ActiveRecord::Migration[5.2]
  def change
    create_table :sub_services do |t|
      t.string :name
      t.text :description
      t.references :service, foreign_key: true
      t.boolean :status

      t.timestamps
    end
  end
end
