class AddLatitudeToUploads < ActiveRecord::Migration
  def change
    add_column :uploads, :latitude, :float
  end
end
