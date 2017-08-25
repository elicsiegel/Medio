class Api::CommentsController < ApplicationController

  def create 
  end 

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      render :show 
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end 

end 