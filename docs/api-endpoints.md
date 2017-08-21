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
- `GET /api/stories/:story_id/comments`
- `POST /api/stories/:story_id/comments`
- `GET /api/comments/:id`
- `DELETE /api/comments/:id`

### Follows

- `GET /api/follows/:followerId`: get all follows for a user
- `GET /api/follows/:followeeId`: get all followers for a user
- `POST /api/follows`
- `DELETE /api/follows/:id`

### Likes

- `GET /api/likes/:userId`: get all likes for a user
- `GET /api/likes/:storyId`: get all likes for a post
- `POST /api/likes`
- `DELETE /api/likes/id`