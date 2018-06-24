class CreateAttachments < ActiveRecord::Migration[5.2]
  def change
    create_table :attachments do |t|
      t.string :file
      t.string :filename
      t.string :type
      t.boolean :status

      t.timestamps
    end
  end
end
