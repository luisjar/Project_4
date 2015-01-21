class Comments < ActiveRecord::Migration
  def change
  	create_table :comments do |t|
  		t.string :content, null: false
  		t.integer :image_id

      t.timestamps
    end
  end
end
