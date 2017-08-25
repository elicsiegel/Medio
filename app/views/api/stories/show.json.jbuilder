json.set! @story.id do
  json.id @story.id 
  json.title @story.title
  json.body @story.body
  json.story_img_url asset_path(@story.image.url)
  json.author @story.author, :id, :username
  json.author_img_url asset_path(@story.author.image.url)

  json.comments do 
    @story.comments.each do |comment|
      json.set! comment.id do 
        json.id comment.id
        json.author_id comment.author_id
        json.body comment.body
        json.story_id comment.story_id
        json.created_at comment.created_at
      end
    end 
  end 

  json.created_at @story.created_at
end