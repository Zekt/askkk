askControllers.controller('candidateInboxCtrl',['$scope','$firebaseAuth', 'conf', '$location', 'authService', '$routeParams','candidateService', 'questionService',

function($scope,$firebaseAuth, conf, $location, authService, $routeParams,candidateService, questionService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
  $scope.conf = conf;
  $scope.titleLimit=global.titleLimitCandidateInbox;
  $scope.userNameLimitMobile = global.userNameLimitMobile;
  
  $scope.auth = $firebaseAuth();
  $scope.auth.$onAuthStateChanged(function(user) {
    if (user) {
        authService.get(user.uid).then(function(user) {
        $scope.user = user;
      });
    }
  });
  $scope.login = function () {
    var provider = new firebase.auth.FacebookAuthProvider();
    $scope.auth.$signInWithPopup(provider).then(function(result) {
      authService.onLogin(result.user);
	}).catch(function(error) {
	});
  };
  $scope.logout = function () {
    authService.onLogout($scope.auth.user);
    $scope.auth.$signOut();
  };

  $scope.questions = questionService;
  $scope.candidates = candidateService;
  $scope.detail = null;

  $scope.inboxAnswered = function(){
    $location.path("/candidate-inbox-replied");
  }
  $scope.displayQuestionDetail = function(questionId){
    $scope.detail = questionService.get(questionId);
  }

  $scope.postResponse = function (content) {
    if (! $scope.detail || !$scope.user.candidate_id) { return; }
    $scope.detail.postResponse({
      postDate: new Date(),
      content: content,
      responser: $scope.user.candidate_id
    }).then(function () {
      $scope.detail = null;
    });
  };

  $scope.goToTop = function(){
     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };

}]);

