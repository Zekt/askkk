// Generated by LiveScript 1.2.0
var assert, ref$, ask, firebase;
assert = require('assert');
ref$ = require('./askkk'), ask = ref$.ask, firebase = ref$.firebase;
describe('Vote', function(){
  var setup;
  setup = function(onComplete){
    return ask.respond({
      content: 'dummy response',
      petitions: [1, 2, 3]
    }, function(error, data){
      return onComplete(data.id);
    });
  };
  return describe('add', function(){
    var x$;
    x$ = it;
    x$('should add response up vote count for up votes', function(done){
      return setup(function(responseId){
        return ask.vote(responseId, 'up', function(error){
          return firebase.child("responses/" + responseId + "/votes/up").once('value', function(snapshot){
            assert.equal(snapshot.val(), 1);
            return done();
          });
        });
      });
    });
    x$('should not add respones up vote count for repeated up votes');
    x$('should minus respones up vote count for withdrawn up votes');
    x$('should add response down vote count for down votes', function(done){
      return setup(function(responseId){
        return ask.vote(responseId, 'down', function(error){
          return firebase.child("responses/" + responseId + "/votes/down").once('value', function(snapshot){
            assert.equal(snapshot.val(), 1);
            return done();
          });
        });
      });
    });
    x$('should not add respones down vote count for repeated down votes');
    x$('should minus respones down vote count for withdrawn down votes');
    x$('should add vote to response meta', function(done){
      return setup(function(responseId){
        return ask.vote(responseId, 'up', function(error){
          return firebase.child("response_meta/" + responseId + "/votes/up/1").once('value', function(snapshot){
            assert.equal(snapshot.val(), true);
            return done();
          });
        });
      });
    });
    x$('should add vote to user meta', function(done){
      return setup(function(responseId){
        return ask.vote(responseId, 'up', function(error){
          return firebase.child("user_meta/1/votes/" + responseId).once('value', function(snapshot){
            assert.equal(snapshot.val(), 'up');
            return done();
          });
        });
      });
    });
    return x$;
  });
});