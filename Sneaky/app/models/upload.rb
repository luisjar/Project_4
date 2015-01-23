class Upload < ActiveRecord::Base
	has_attached_file :image, :styles => { :medium => "300x300>",:thumb => "100x100>" }
	
	validates_attachment 	:image, 
				:presence => true,
				:content_type => { :content_type => /\Aimage\/.*\Z/ },
				:size => { :less_than => 2.megabyte }

	def image_url
		image.url
	end

	def calculate_distance(lat, long)
		R = 6371
		x = (self.latitude-lat) * Math.cos((long+self.longitude)/2)
		y = (self.longitude-long)
		Math.sqrt(x*x + y*y) * R
	end
end