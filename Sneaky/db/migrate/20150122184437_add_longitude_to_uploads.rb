class AddLongitudeToUploads < ActiveRecord::Migration
  def change
    add_column :uploads, :longitude, :float
  end
end
