Meteor.methods({
  addPost: function (obj) {
    
    check(this.userId, String)
    
    console.log('addPost start. obj:', obj);

    Posts.insert({
      author: {
        _id: this.userId,
        name: Meteor.user().username,
        profileImageUrl: Gravatar.imageUrl(Meteor.user().emails[0].address,
            {d: 'retro'})
      },
      message: obj.message,
      pageId: obj.pageId,
      createdAt: Date.now()
    });
  },

});
