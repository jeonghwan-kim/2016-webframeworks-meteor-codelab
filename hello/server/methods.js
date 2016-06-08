Meteor.methods({
  addPost: function (post) {

    console.log('adPost start', obj)

    Posts.insert({
      author: {
        name: obj.name,
        profileImageUrl: obj.profileImageUrl
      },
      message: obj.message,
      createdAt: Date.now(),
      pageId: obj.pageId
    });
  },

});
