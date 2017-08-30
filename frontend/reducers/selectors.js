export const allStories = ({ stories }) => Object.keys(stories).map(id => stories[id]);

const allStoriesPure = (stories) => Object.keys(stories).map(id => stories[id]);

export const allBookmarkedStories = ({ stories, session }) => {

  let stories2 = allStoriesPure(stories);
  
  return stories2.filter((story) => session.currentUser.bookmarked_story_ids.includes(story.id));
};

export const relevantStorySearchResults = ({searches, stories}) => {
  
  let stories2 = allStoriesPure(stories);

  return stories2.filter((story) => searches.story_ids.includes(story.id));
}

export const relevantUserSearchResults = ({searches, users}) => {

}

export const allComments = ({comments}, story) => {
  const relevantComments = []; 
  Object.keys(comments).forEach((id) => {
    if (comments[id].story_id === story.id) {
      relevantComments.push(comments[id]); 
    }
  });
  return relevantComments;   
}