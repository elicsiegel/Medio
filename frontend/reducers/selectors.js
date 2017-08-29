export const allStories = ({ stories }) => Object.keys(stories).map(id => stories[id]);

export const allBookmarkedStories = ({ stories, session }) => {
  const allStories = (stories) => Object.keys(stories).map(id => stories[id]);

  let stories2 = allStories(stories);
  
  return stories2.filter((story) => session.currentUser.bookmarked_story_ids.includes(story.id));
};

export const allComments = ({comments}, story) => {
  const relevantComments = []; 
  Object.keys(comments).forEach((id) => {
    if (comments[id].story_id === story.id) {
      relevantComments.push(comments[id]); 
    }
  });
  return relevantComments;   
}