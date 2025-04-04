class CranesController < ApplicationController
  def index
    render json: Crane.all
  end

  def show
    crane = Crane.find(params[:id])
    render json: crane
  end

  def create
    crane = Crane.new(crane_params)
    if crane.save
      render json: crane, status: :created
    else
      render json: crane.errors, status: :unprocessable_entity
    end
  end

  private

  def crane_params
    params.require(:crane).permit(:rating, :rose, :thorn, :bud)
  end
end
