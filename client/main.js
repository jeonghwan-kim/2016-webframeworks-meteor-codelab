Template.main.onCreated(function () {

  console.log('Template.main.onCreated');

  this.subscribe('getPage', Session.get('pageId'));
});

Template.main.helpers({
  pageId: function () {
    return Session.get('pageId');
  }
});

Template.main.events({
  submit: function (event, template) {

    console.log('Template.main.events.submit started');

    Meteor.call('addPost', {
      author: {
        name: Meteor.user().username,
        profileImageUrl: 'http://lorempixel.com/64/64/people/',
      },
      message: template.find('#post').value,
      pageId: Session.get('pageId'),
    }, function (err, result) {
      if (err) throw err;

      console.log('Templage.main.events.submit ended', result);

      template.find('#post').value = '';
    });

    event.preventDefault(); // Prevent refresh page
  }
});
