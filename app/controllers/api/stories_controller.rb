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
    @story = Story.includes(:comments).find(params[:id])
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

  def add_like
    @story = Story.find(params[:id])
    new_like = Like.new(story_id: @story.id, user_id: current_user.id)

    if new_like.save 
      render :show
    else 
      render json: like.errors.full_messages, status: 422
    end 
  end

  def remove_like
    @story = Story.find(params[:id])
    like_to_delete = Like.where(story_id: @story.id, user_id: current_user.id)[0]
    
    if like_to_delete.destroy 
      render :show
    else 
      render json: like_to_delete.errors.full_messages
    end 
  end

  private 

  def story_params
    params.require(:story).permit(:title, :body, :author_id, :image)
  end 
end 