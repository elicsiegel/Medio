json.set! @story.id do
  json.title @story.title
  json.body @story.body
  json.author @story.author, :id, :username
end