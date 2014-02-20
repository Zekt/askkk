askControllers.controller('questionListCtrl', ['$scope', '$firebaseSimpleLogin', 'authService', '$location', 'candidateService', 'questionService', 'signService', function($scope, $firebaseSimpleLogin, authService, $location, candidateService, questionService, signService){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();
  if($(window).width()<400) mobileSideBarSetup();

  $scope.auth = $firebaseSimpleLogin(new Firebase('https://askkkkk.firebaseio.com/'));
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
    signService.sign(1, questionId);
  };
  $scope.sortByTime = function(){
    console.log("sort by time");
  };
  $scope.sortByVotes = function(){
    console.log("sort by votes");
  };

  
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
