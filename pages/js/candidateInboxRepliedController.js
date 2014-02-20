
askControllers.controller('candidateInboxRepliedCtrl',['$scope','$firebaseSimpleLogin', '$location', 'authService', '$routeParams','candidateService',

function($scope,$firebaseSimpleLogin, $location, authService, $routeParams,candidateService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
  
  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.auth.$getCurrentUser().then(function (user) {
    if (user == null) {
      $location.path("/");
    }
    authService.isCandidate(user.id).then(function (result) {
      if (! result) {
        $location.path("/");
      }
    });
  });
  $scope.login = function () {
    $scope.auth.$login('facebook')
    .then(function (user) {
      authService.onLogin(user);
    }, function (error) {
    });
  };
  $scope.logout = function () {
    authService.onLogout($scope.auth.user);
    $scope.auth.$logout();
  };
  $scope.inboxUnreplied = function(){
    window.location = "#/candidate-inbox"
  }
  $scope.displayQuestionDetail = function(questionId){
    console.log(questionId);
  }

  $scope.goToTop = function(){
     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };
  
  $scope.candidates = candidateService;
  $scope.detail = global.responseData[0];
  $scope.data = global.responseDataCandidate;

}]);

