export const destroyComment = (comment) =>
    $.ajax({
        method: 'DELETE',
        url: `api/comments/${comment.id}`
    });

export const createComment = (comment) => {
    return $.ajax({
        method: 'POST',
        url: `/api/stories/${comment.story_id}/comments`,
        data: {comment: comment}
    });
};

export const updateComment = (comment) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: {comment: comment}
    });
};
