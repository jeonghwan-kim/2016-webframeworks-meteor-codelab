Meteor.methods({
  addPost: function (obj) {

    console.log('addPost start. obj:', obj);

    Posts.insert({
      author: obj.author,
      message: obj.message,
      pageId: obj.pageId,
      createdAt: Date.now(),
    });
  },

});
