askControllers.controller('responseListCtrl', ['$scope', 'candidateService', function($scope, candidateService){


  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

  $scope.candidates = candidateService;
  $scope.categories = global.categories;
  $scope.data = global.responseData;

  $scope.showQuestionDetail = function(questionId){
    event.stopPropagation();
    console.log("show question detail, id:"+questionId);
    window.location = "#/response/"+questionId;
    
  };
  $scope.voteQuestion = function(questionId){
    console.log("vote for this detail, id:"+questionId);
    event.stopPropagation();
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

