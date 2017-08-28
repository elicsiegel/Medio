export const fetchStories = () => {
  return $.ajax({
    method: "GET",
    url: "/api/stories",
    error: (err) => console.log(err)
  })
}

export const fetchStory = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/stories/${id}`,
    error: (err) => console.log(err)
  })
}

export const createStory = formData => {
 return $.ajax({
    method: 'POST',
    url: '/api/stories',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
  })
};

export const updateStory = formData => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/stories/${formData.get('story[id]')}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
  })
}

export const destroyStory = story => (
  $.ajax({
    method: 'DELETE',
    url: `api/stories/${story.id}`
  })
);

export const addStoryLike = story => {
  return $.ajax({
    method: 'POST',
    url: `/api/likes/${story.id}`,
    data: story,
  })
}

export const removeStoryLike = story => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${story.id}`,
    data: story,
  })
}