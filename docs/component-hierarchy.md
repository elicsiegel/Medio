## Component Hierarchy

**Root**
 - App
  * Wrapped in Provider and Hash Router

**App**
 - Header with Title and Greeting Container
 - AuthRoutes
 - Route to Story Detail Container
 - Route to Story Form Container (for editing and creating)

**GreetingContainer**
 - Greeting

**SessionFormContainer**
 - SessionForm

**StoriesIndexContainer**
 - Stories Index 
 - Story Index Item

**StoryDetailContainer**
 - Story
  * Author

**StoryFormContainer**
 - StoryForm

**CommentsContainer**
 - Comment

**CommentFormContainer**
 - CommentForm

**FollowsContainer**
 - Follows/Followers

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/stories/:storyId" | "StoryDetailContainer" |
| "/index" | "StoriesIndexContainer" |
| "/stories/new" | "StoryFormContainer"
| "/stories/:storyId/edit"| "StoryFormContainer"