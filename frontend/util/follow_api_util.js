export const destroyFollow = (follow) =>
    $.ajax({
        method: 'POST',
        url: `/api/users/${follow.follower_id}/unfollow`,
        data: {follow: follow}
    });

export const createFollow = (follow) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${follow.follower_id}/follow`,
        data: {follow: follow}
    });
};
