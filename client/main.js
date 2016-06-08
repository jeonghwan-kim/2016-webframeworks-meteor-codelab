Template.main.onCreated(function (pageId) {
  this.subscribe('getPage', pageId);
  Session.get('pageId');
});

Template.main.helpers({
  pageId: function () {
    return Session.get('pageId') // todo
  },

  page: function () {
    return Session.get('pageId')
  }
});

Template.main.events({
  submit: function (event, template) {
    console.log('submit started');
    Meteor.call('addPost', {
      name: 'Chris',
      profileImageUrl: 'http://lorempixel.com/64/64/cat/',
      message: template.find('#post').value,
      pageId: Session.get('pageId'),
    }, function (err, result) {
      if (err) {
        throw err;
      } else {
        console.log('submit ended', result);
        template.find('#post').value = '';
      }
    });
    event.preventDefault(); // Prevent refresh page
  }
});
