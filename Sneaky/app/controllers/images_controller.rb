class ImagesController < ApplicationController
	def index
    render json: Image.all
  end

  def show
    render json: Image.find(params[:id])
  end

  def create
    image = Image.create(image_params)
    render json: image
  end

  def update
    image = Image.find(params[:id])
    image.update(image_params)
    render json: image
  end

  def destroy
    image = Image.find(params[:id])
    image.destroy
    render json: image
  end

  private
  def image_params
    params.require(:image).permit(:img_url)
  end
end