export const allStories = ({ stories }) => Object.keys(stories).map(id => stories[id]);

export const allComments = ({ comments }) => Object.keys(comments).map(id => comments[id]);