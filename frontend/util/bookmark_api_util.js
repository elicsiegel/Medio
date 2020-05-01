export const destroyBookmark = (bookmark) =>
    $.ajax({
        method: 'DELETE',
        url: `/api/bookmarks/${bookmark.story_id}`,
        data: {bookmark}
    });

export const createBookmark = (bookmark) => {
    return $.ajax({
        method: 'POST',
        url: `/api/bookmarks/${bookmark.story_id}`,
        data: {bookmark}
    });
};
