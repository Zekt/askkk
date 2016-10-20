askControllers.controller('questionListCtrl', ['$scope', '$firebaseAuth', 'conf', 'authService', '$location', 'candidateService', 'questionService', 'signService', function($scope, $firebaseAuth, conf, authService, $location, candidateService, questionService, signService){

  semanticMenuReady();
  //semanticAccordingReady();
  semanticSidebarReday();
  $scope.conf = conf;
  $scope.userNameLimitMobile = global.userNameLimitMobile;


/*
  $scope.categoryCheckboxSetup = function(){
      //category checkbox
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
  
  };
 */ 
  $scope.titleLimit=global.titleLimit;
  $scope.askerNameLimit=global.askerNameLimit;
  $scope.signature_threshold = signService.signature_threshold;
  $scope.categorySelection = [];
  
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
  }else{
    //$scope.categoryCheckboxSetup();

  }
  /* ---------------------- */

  
  $scope.auth = $firebaseAuth();
  $scope.auth.$onAuthStateChanged(function(user) {
    if(user) {
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

  

}]);
