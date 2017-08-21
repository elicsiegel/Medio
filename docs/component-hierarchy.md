## Component Hierarchy

**Root**
 - App
  * Wrapped in Provider and Hash Router

**App**
 - Header with Title and Greeting Container
 - AuthRoutes: "/login" and "/signup"
 - Route to Story Index Container: "/"
 - Route to Story Detail Container: "stories/:storyId"
 - Route to Story Form Container: "stories/new" and "stories/:storyId/edit" (for editing and creating)

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
| "/" | "StoriesIndexContainer" |
| "/stories/new" | "StoryFormContainer" |
| "/stories/:storyId/edit"| "StoryFormContainer" |