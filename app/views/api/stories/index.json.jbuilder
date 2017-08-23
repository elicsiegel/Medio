@stories.each do |story|
  json.set! story.id do
    json.id story.id
    json.title story.title
    json.body story.body
    json.author story.author, :id, :username
  end
end