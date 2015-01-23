class UploadsController < ApplicationController

  def index
    render json: Upload.all.to_json(:methods => [:image_url])
  end

  def new
  	@upload = Upload.new
  end
 
  def create
  	@upload = Upload.create(upload_params)
  	if @upload.save
  	  render json: { message: "success" }, :status => 200
  	else
  	  #need to send an error header, otherwise Dropzone
          #  will not interpret the response as an error:
  	  render json: { error: @upload.errors.full_messages.join(',')}, :status => 400
  	end  		
  end
 
  private
  def upload_params
  	params.require(:upload).permit(:image, :latitude, :longitude)
  end
end
