{
  session: {
    current_user: {
      id: 1,
      name: "Eli",
      bio: "Our first user",
      image_url: './eli_pic.jpg',
      bookmarks: [1, 2],
      follows: [2, 3],
      followers: [4, 21],
      bookmark_ids: [5, 6]
    },
    errors: []
  }
  stories: {
    
    1: {
      id: 1,
      title: "How to make a web app",
      body: "Make a front end, a back end and something to bring them together",
      author_id: 1,
      image_url: "./web_app.png"
      comments: [1, 2]
      likes: [1, 2]
      categories: [3, 4]
    }

  },

  comments: {

    1: {
      id: 1,
      body: "I love this article",
      author_id: 1,
      story_id: 1
    }

  },
  likes: {

    1: {
      story_id: 1,
      user_id: 1
    }

    2: {
      story_id: 2, 
      user_id: 1
    }

  },
  follows: {

    1: {
      follower_id: 1,
      followee_id: 2
    }
    
  }
}