class Api::SearchesController < ApplicationController

  def index
    @stories = Story.search_for(params[:query])
    @story_ids = @stories.map do |story|
      story.id 
    end

    @users = User.search_for(params[:query])
    @user_ids = @users.map do |user| 
      user.id 
    end
  end 

end 