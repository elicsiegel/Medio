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

json.comments do 
  @stories.each do |story|
    story.comments.each do |comment|
      json.set! comment.id do 
        json.id comment.id
        json.author comment.author, :id, :username
        json.author_img_url asset_path(comment.author.image.url)
        json.author_id comment.author_id
        json.body comment.body
        json.story_id comment.story_id
        json.created_at comment.created_at
      end
    end 
  end 
end 