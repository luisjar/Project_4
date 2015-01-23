class Upload < ActiveRecord::Base
	# geocoded_by :ip_address,
 #  	:latitude => :lat, :longitude => :lon
	# after_validation :geocode

	# geocoded_by :address
	# after_validation :geocode

	reverse_geocoded_by :latitude, :longitude
	after_validation :reverse_geocode  # auto-fetch address

	has_attached_file :image, :styles => { :medium => "300x300>",:thumb => "100x100>" }
	
	validates_attachment 	:image, 
				:presence => true,
				:content_type => { :content_type => /\Aimage\/.*\Z/ },
				:size => { :less_than => 2.megabyte }

	def image_url
		image.url
	end
end

