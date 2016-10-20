askControllers.controller('responseDetailCtrl', ['$scope', '$firebaseAuth', 'conf', 'authService', '$routeParams', 'candidateService', 'questionService', function($scope, $firebaseAuth, conf, authService, $routeParams, candidateService, questionService){


  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
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
  $scope.data = data = questionService.get($routeParams['responseId']);

  $scope.upVoteResponse = function(responseId){
    questionService.upVoteResponse({
      questionId: $routeParams['responseId'],
      responseId: responseId,
      userId: $scope.user.id
    });
  };
  $scope.downVoteResponse = function(responseId){
    questionService.downVoteResponse({
      questionId: $routeParams['responseId'],
      responseId: responseId,
      userId: $scope.user.id
    });
  };
  $scope.voted = function (responseId) {
    if (!data.response) { return false; }
    return (data.responses[responseId].upVotes && data.responses[responseId].upVotes[$scope.user.id]) || (data.responses[responseId].downVotes && data.responses[responseId].downVotes[$scope.user.id]);
  }
  $scope.goToCandidate = function(id){
     var body = $("html, body");
     var p = $('#response_item_'+id).position();
     var o = $('#response_item_'+id).offset();
     body.animate({scrollTop:o.top}, '500', 'swing');

  };
  $scope.goToTop = function(){

     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };
    
  // for sign peition area keep floating
  var nav = $('#response_detail_right_menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 230) {
            nav.addClass("f-nav");
            nav.removeClass("fr-fix");

        } else {
            nav.removeClass("f-nav");
            nav.addClass("fr-fix");

        }
    });
  
}]);

