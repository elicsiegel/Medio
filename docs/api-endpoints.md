# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Stories

- `GET /api/stories`
- `POST /api/stories`
- `GET /api/stories/:id`
- `PATCH /api/stories/:id`
- `DELETE /api/stories/:id`

### Comments

- A story's comments will be displayed on the show page for that story
- get comments with story
- `POST /api/stories/:story_id/comments`

- `DELETE /api/comments/:id`

### Follows
  (get follows with user)
  post and delete follows on user controller 

- `POST /api/follows`
- `DELETE /api/follows/:id`

### Likes
  bring count of likes with story, bring in key on jbuilder if liked by current user  
  post and delete likes from stories controller 
  
- `POST /api/likes`
- `DELETE /api/likes/id`