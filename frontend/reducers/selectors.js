export const allStories = ({ stories }) => Object.keys(stories).map(id => stories[id]);

export const allComments = ({comments}, story) => {
  const relevantComments = []; 
  Object.keys(comments).forEach((id) => {
    if (comments[id].story_id === story.id) {
      relevantComments.push(comments[id]); 
    }
  });
  return relevantComments;   
}