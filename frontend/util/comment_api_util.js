export const destroyComment = comment => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`
  })
);

export const createComment = comment => {
  debugger
 return $.ajax({
    method: 'POST',
    url: `/api/stories/${comment.story_id}/comments`,
    data: { comment: comment },
  })
};