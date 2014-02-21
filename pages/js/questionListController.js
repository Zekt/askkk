askControllers.controller('questionListCtrl', ['$scope', '$firebaseSimpleLogin', 'authService', '$location', 'candidateService', 'questionService', 'signService', function($scope, $firebaseSimpleLogin, authService, $location, candidateService, questionService, signService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
  
  $scope.titleLimit=global.titleLimit;
  
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
    $scope.titleLimit=global.titleLimitMobile;
  }
  /* ---------------------- */


  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
  $scope.auth.$getCurrentUser().then(function (user) {
    authService.get(user.id).then(function (user) {
      $scope.user = user;
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
  $scope.candidates = candidateService;
  $scope.categories = global.categories;
  $scope.questions = questionService;

  $scope.showQuestionDetail = function(questionId){
    $location.path("/question/" + questionId)
  };
  $scope.signQuestion = function(questionId){
    signService.sign($scope.auth.user.id, questionId);
  };
  $scope.signed = function(questionId) {
    if ($scope.auth.user
        && $scope.questions[questionId]
        && $scope.questions[questionId].signatures
    ) {
      return $scope.questions[questionId].signatures[$scope.auth.user.id];
    } else {
      return false;
    }
  }
  $scope.sortByTime = function(){
    console.log("sort by time");
  };
  $scope.sortByVotes = function(){
    console.log("sort by votes");
  };
  $scope.signature_threshold = signService.signature_threshold;
  
  /* --------------------------------------------------- */
  //category checkbox
  $scope.categorySelection = [];
  $scope.toggleCategory = function(){
    console.log("toggle category");
    var text = $(this).find("label").text();
    console.log(text);
    var idx = $scope.categorySelection.indexOf(text);
    // is currently selected
    if (idx > -1) {
       $scope.categorySelection.splice(idx, 1);      
    }else{
       $scope.categorySelection.push(text);
    }
    console.log($scope.categorySelection);

  };


  $scope.flag = true;
  $scope.$watch(function(){
  return document.body.innerHTML
  }, function(val){
  if($scope.flag && ($(".category_checkbox").length===$scope.categories.length)){
    semanticAccordingReady();
    $scope.flag = false;
    $(".category_checkbox").on("click",$scope.toggleCategory);
  }
  });
  /* --------------------------------------------------- */
  

}]);
