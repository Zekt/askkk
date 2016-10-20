askControllers.controller('indexCtrl', ['$scope', '$firebaseAuth', 'conf', 'authService', 'candidateService', 'signService', function($scope, $firebaseAuth, conf, authService, candidateService, signService){

  semanticMenuReady();
  //semanticAccordingReady();
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
  $scope.signature_threshold = signService.signature_threshold;
  
  $scope.tabChoose = function(chosed_tab){
  	
  	$(".tab").hide();
  	$(".index_tab").removeClass("index_tab_active");
  	$("#"+chosed_tab).show();
  	$("#"+chosed_tab+"_tab").addClass("index_tab_active");

    //mobiel tab css adjust

    $(".tab_menu").removeClass("tab_menu_active");
    $("#"+chosed_tab+"_mobiletab").addClass("tab_menu_active");

    //dynamically adjust height
    var height = $("#"+chosed_tab).height()+150;
    $("#why_and_how_segment").css("height",height+"px");

    //hide left side bar menu
    $('.body').removeClass("left");
    $('.body').removeClass("pushed");
    $("#menu").removeClass("active");
  }
 
}]);
