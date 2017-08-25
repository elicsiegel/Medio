export const fetchComments = (storyId) => {
  return $.ajax({
    method: "GET",
    url: `/api/stories/${id}/comments`,
    error: (err) => console.log(err)
  })
}

export const destroyComment = comment => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`
  })
);