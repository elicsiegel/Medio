class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def add_bookmark
    @user = current_user 

    bookmark = Bookmark.new(bookmark_params)

    if bookmark.save 
      render :show
    else 
      render json: bookmark.errors.full_messages
    end 
  end 

  def remove_bookmark
    @user = current_user

    bookmark = Bookmark.where(story_id: params[:bookmark][:story_id].to_i, user_id: @user.id)[0]
    Bookmark.destroy(bookmark.id)
    render :show
  end 

  def follow
    @user = User.find(params[:id])

    follow = Follow.new(follow_params)

    if follow.save 
      render :show
    else 
      render json: follow.errors.full_messages
    end
  end 

  def unfollow 
    @user = User.find(params[:id])
    follow = Follow.where({followee_id: params[:follow][:followee_id].to_i, follower_id: @user.id })[0]
    Follow.destroy(follow.id)
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :image)
  end
  
  def follow_params
    params.require(:follow).permit(:followee_id, :follower_id)
  end 

  def bookmark_params
    params.require(:bookmark).permit(:story_id, :user_id)
  end 
  
end