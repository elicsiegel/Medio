json.id @comment.id 
json.author @comment.author, :id, :username
json.author_img_url asset_path(@comment.author.image.url)
json.author_id @comment.author_id
json.story_id @comment.story_id
json.body @comment.body
json.created_at @comment.created_at
