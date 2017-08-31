json.stories do 
  @stories.each do |story|
    json.set! story.id do
      json.id story.id
      json.title story.title
      json.body story.body
      json.comment_ids story.comment_ids
      json.created_at story.created_at
      json.num_likes story.likes.count
      json.liker_ids story.liker_ids
      json.category story.category
      json.story_img_url asset_path(story.image.url)
      json.author story.author, :id, :username
      json.author_img_url asset_path(story.author.image.url)
    end
  end
end

json.users do 
  @users.each do |user|
    json.set! user.id do
      json.id user.id
      json.username user.username
      json.user_img_url asset_path(user.image.url)
      json.created_at user.created_at
      json.followee_ids user.followee_ids
      json.bookmarked_story_ids user.bookmarked_story_ids
    end
  end 
end 


json.ids do 
  json.story_ids do
    json.array! @story_ids
  end

  json.user_ids do
    json.array! @user_ids
  end
end 