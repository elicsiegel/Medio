@stories.each do |story|
  json.set! story.id do
    json.id story.id
    json.title story.title
    json.body story.body
    json.story_img_url asset_path(story.image.url)
    json.author story.author, :id, :username
  end
end