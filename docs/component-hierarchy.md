## Component Hierarchy

**Root**
 - App

**GreetingContainer**
 - Greeting

**AuthFormContainer**
 - AuthForm

**StoriesIndexContainer**
 - Stories List
 - StoryItem

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