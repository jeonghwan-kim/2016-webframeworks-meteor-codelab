Template.post.onCreated(function () {

  console.log('Template.post.onCreated');
  
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
