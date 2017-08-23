export const fetchStories = () => {
  return $.ajax({
    method: "GET",
    url: "/api/stories",
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