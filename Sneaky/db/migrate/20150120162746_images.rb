class Images < ActiveRecord::Migration
  def change
  	create_table :images do |t|
    	t.string :img_url
    	t.float  :latitude
    	t.float  :longitude
    	t.integer :user_id

      t.timestamps
    end
  end
end
