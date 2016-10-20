askControllers.controller('loginCheckCtrl', ['$scope', '$firebaseAuth', 'conf', 'authService', '$location', 'candidateService', 'questionService', function($scope, $firebaseAuth, conf, authService, $location, candidateService, questionService){
  
  
  $scope.conf = conf;
  $scope.candidates = candidateService;
  $scope.auth = $firebaseAuth();
  
  var user = $scope.auth.$getAuth();
  if(user) {
    try{
        authService.get(user.uid).then(function(user) {
        $scope.user = user;
        window.location = "#/ask-question";
      });
    }catch(error){
      console.log("請先登入後再發問！");
    }
  };

  $scope.login = function () {
    var provider = new firebase.auth.FacebookAuthProvider();
    $scope.auth.$signInWithPopup(provider).then(function(result) {
      try{
        authService.get(result.user.uid).then(function(user) {
          $scope.user = user;
          window.location = "#/ask-question";
        });
      }catch(error){
        alert("請先登入後再發問！");
      }
      authService.onLogin(result.user);
	}).catch(function(error) {
	});
  };


}]);
