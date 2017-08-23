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

export const createStory = story => {
 return $.ajax({
    method: 'POST',
    url: '/api/stories',
    data: story 
  })
};

export const updateStory = story => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/stories/${story.story.id}`,
    data: story 
  })
}

export const destroyStory = story => (
  $.ajax({
    method: 'DELETE',
    url: `api/stories/${story.id}`
  })
);