json.set! @user.id do 
  json.id @user.id 
  json.username @user.username
  json.created_at @user.created_at
  json.followee_ids @user.followee_ids
  json.bookmarked_story_ids @user.bookmarked_story_ids
  json.user_img_url asset_path(@user.image.url)
end