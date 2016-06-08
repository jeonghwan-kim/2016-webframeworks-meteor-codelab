Template.post.onCreated(function () {
  this.subscribe('getPage', Session.get('pageId'));
});

Template.post.helpers({
  posts: function () {
    return Posts.find({}, {
      sort: {
        createdAt: -1 // desc, Mongodb syntax
      }
    });
  }
});
