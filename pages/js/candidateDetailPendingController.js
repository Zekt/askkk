askControllers.controller('candidateDetailPendingCtrl', ['$scope', '$firebaseAuth', 'conf', 'authService', '$routeParams', 'candidateService', 
  function($scope, $firebaseAuth, conf, authService, $routeParams, candidateService){

  semanticMenuReady();
  semanticAccordingReady();
  $scope.conf = conf;
  $scope.userNameLimitMobile = global.userNameLimitMobile;


  /* --- mobile nav set --- */
  $('.body').removeClass("left");
  $('.body').removeClass("pushed");
  mobileNavPosition();
  $("#mobile_nav_button").on("click",function(){
    mobileNavPosition();
  });
  if($(window).width()<400){
    mobileNavSetup();
    mobileSideBarSetup();
  }
  /* ---------------------- */
  
  
  $scope.n = candidateService.get($routeParams.candidateId);

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
  $scope.candidates = candidateService;
  //$scope.data = global.responseData;
  //$scope.n = global.oneCandidate;

  $scope.answered=function(){
    window.location = "#/candidate/"+$routeParams.candidateId;
  }

  $scope.askCandidateJoin = function(candidateId){
    console.log("ask candidate join, id:"+candidateId);
  };


  // for sign question area keep floating
  var nav = $('#taipei_candidates');

    $(window).scroll(function () {
        
        if ($(this).scrollTop() > 230) {
            nav.addClass("f-nav");
            nav.removeClass("fc-fix");

        } else {
            nav.removeClass("f-nav");
            nav.addClass("fc-fix");

        }
    });



}]);

