Meteor.methods({
  addPost: function (obj) {

    console.log('addPost start. obj:', obj);

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
