Template.post.helpers({
  posts: function () {
    return [{
      id: 1,
      author: {
        profileImageUrl: 'http://lorempixel.com/64/64/cat/',
        name: 'Mater1'
      },
      message: 'Is anybody here?'
    }, {
      id: 2,
      author: {
        profileImageUrl: 'http://lorempixel.com/64/64/people/',
        name: 'Slave2',
      },
      message: 'I\'am here master...'
    }];
  }
});
