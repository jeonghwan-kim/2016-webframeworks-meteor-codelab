Meteor.publish('getPage', function (pageId) {
  
  console.log('getPage started. pageId:', pageId);
  
  if (pageId) {
    return Posts.find({pageId: pageId});
  } else {
    return Posts.find();
  }

});
