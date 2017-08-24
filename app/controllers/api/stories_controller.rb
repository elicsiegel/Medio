class Api::StoriesController < ApplicationController 

  def index 
    @stories = Story.all 
  end 

  def create 
    @story = Story.new(story_params)

    if @story.save 
      render :show 
    else 
      render json: @story.errors.full_messages, status: 422
    end 
  end 

  def show
    @story = Story.find(params[:id])
  end 

  def update 
    @story = Story.find(params[:id])

    if @story.update(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end 

  def destroy
    @story = Story.find(params[:id])

    if @story.destroy
      render :show 
    else
      render json: @story.errors.full_messages, status: 422
    end
  end 

  private 

  def story_params
    params.require(:story).permit(:title, :body, :author_id, :image)
  end 
end 