const posts = [
  {
    user: {
      name: "Lori Ferguson",
      job: "Web Developer at Webestica",
    },
    time: "1h",
    text: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
    mediaFiles: ["/video-1.mov", "/post-2.jpg", "/post-3.jpg"],
    comments: [
      {
        user: {
          name: "John Doe",
        },
        time: "2hr",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum illum optio quo cumque adipisci amet, asperiores neque ipsa voluptas quia totam rem eaque culpa, possimus iste, quidem doloremque maiores!",
        replies: [
          {
            user: {
              name: "Jane Smith",
            },
            time: "1hr",
            text: "Congratulations! That's a great achievement!",
            replies: [
              {
                user: {
                  name: "Alice Brown",
                },
                time: "30min",
                text: "Well done!",
                replies: [
                  {
                    user: {
                      name: "Charlie Green",
                    },
                    time: "15min",
                    text: "Keep up the good work!",
                    replies: [
                      {
                        user: {
                          name: "David White",
                        },
                        time: "10min",
                        text: "Impressive!",
                        replies: [
                          {
                            user: {
                              name: "Ella Black",
                            },
                            time: "5min",
                            text: "Congratulations again!",
                            replies: [
                              {
                                user: {
                                  name: "Fiona Gray",
                                },
                                time: "2min",
                                text: "Fantastic news!",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        user: {
          name: "Emily Davis",
        },
        time: "3hr",
        text: "Amazing work, Lori!",
        replies: [
          {
            user: {
              name: "George Brown",
            },
            time: "2hr",
            text: "Indeed, amazing work!",
            replies: [
              {
                user: {
                  name: "Hannah White",
                },
                time: "1hr",
                text: "I agree, really impressive!",
                replies: [
                  {
                    user: {
                      name: "Ian Black",
                    },
                    time: "45min",
                    text: "Great job!",
                    replies: [
                      {
                        user: {
                          name: "Jack Gray",
                        },
                        time: "30min",
                        text: "Superb effort!",
                        replies: [
                          {
                            user: {
                              name: "Karen Green",
                            },
                            time: "20min",
                            text: "Wonderful achievement!",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    user: {
      name: "Mark Johnson",
      job: "Graphic Designer at Creatives Inc.",
    },
    time: "2h",
    text: "Just finished a new design project! Check out the previews below.",
    mediaFiles: ["/post-3.jpg"],
    comments: [
      {
        user: {
          name: "Sara Wilson",
        },
        time: "1hr",
        text: "The designs look fantastic, Mark!",
        replies: [
          {
            user: {
              name: "Mark Johnson",
            },
            time: "45min",
            text: "Thanks, Sara! Appreciate it.",
            replies: [],
          },
        ],
      },
      {
        user: {
          name: "Tom Lee",
        },
        time: "2hr",
        text: "Great job, Mark!",
        replies: [
          {
            user: {
              name: "Mark Johnson",
            },
            time: "1hr",
            text: "Thanks, Tom!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    user: {
      name: "Nancy Green",
      job: "Content Creator at Blogosphere",
    },
    time: "4h",
    text: "New blog post is up! Dive into the latest trends in the tech industry.",
    mediaFiles: ["/video-1.mov"],
    comments: [
      {
        user: {
          name: "Michael Scott",
        },
        time: "3hr",
        text: "Loved your insights, Nancy!",
        replies: [
          {
            user: {
              name: "Nancy Green",
            },
            time: "2hr",
            text: "Thank you, Michael!",
            replies: [],
          },
        ],
      },
      {
        user: {
          name: "Dwight Schrute",
        },
        time: "3hr",
        text: "Great article, Nancy!",
        replies: [
          {
            user: {
              name: "Jim Halpert",
            },
            time: "2hr",
            text: "Agreed, it was a great read.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    user: {
      name: "Lori Ferguson",
      job: "Web Developer at Webestica",
    },
    time: "1h",
    text: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
    mediaFiles: ["/video-1.mov", "/post-2.jpg", "/post-3.jpg"],
    comments: [
      {
        user: {
          name: "John Doe",
        },
        time: "2hr",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum illum optio quo cumque adipisci amet, asperiores neque ipsa voluptas quia totam rem eaque culpa, possimus iste, quidem doloremque maiores!",
        replies: [
          {
            user: {
              name: "Jane Smith",
            },
            time: "1hr",
            text: "Congratulations! That's a great achievement!",
            replies: [], // Nested replies if any
          },
        ],
      },
    ],
  },
  {
    user: {
      name: "Lori Ferguson",
      job: "Web Developer at Webestica",
    },
    time: "1h",
    text: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
    mediaFiles: ["/video-1.mov", "/post-2.jpg", "/post-3.jpg"],
    comments: [
      {
        user: {
          name: "John Doe",
        },
        time: "2hr",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum illum optio quo cumque adipisci amet, asperiores neque ipsa voluptas quia totam rem eaque culpa, possimus iste, quidem doloremque maiores!",
      },
    ],
  },

  {
    user: {
      name: "Lori Ferguson",
      job: "Web Developer at Webestica",
    },
    time: "1h",
    text: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
    mediaFiles: [
      "/video-2.mp4",
      "/post-1.jpg",
      "/post-2.jpg",
      "/video-1.mov",
      "/post-3.jpg",
    ],
    comments: [
      {
        user: {
          name: "John Doe",
        },
        time: "2hr",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum illum optio quo cumque adipisci amet, asperiores neque ipsa voluptas quia totam rem eaque culpa, possimus iste, quidem doloremque maiores!",
      },
    ],
  },

  {
    user: {
      name: "Lori Ferguson",
      job: "Web Developer at Webestica",
    },
    time: "1h",
    text: "I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.",
    mediaFiles: ["/post-1.jpg", "/post-2.jpg", "/post-3.jpg"],
    comments: [
      {
        user: {
          name: "John Doe",
        },
        time: "2hr",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum illum optio quo cumque adipisci amet, asperiores neque ipsa voluptas quia totam rem eaque culpa, possimus iste, quidem doloremque maiores!",
      },
    ],
  },
];

export default posts;