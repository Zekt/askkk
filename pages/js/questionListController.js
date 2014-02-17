askControllers.controller('questionListCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();
  semanticSidebarReday();

  $scope.flag = true;
  $scope.$watch(function(){
  return document.body.innerHTML
  }, function(val){
  if($scope.flag && ($(".category_checkbox").length===$scope.categories.length)){
    semanticAccordingReady();
    $scope.flag = false;
  }
  });

  $scope.candidates = global.candidates;
  $scope.categories = global.categories;



  $scope.data =
   [{'title':'是否有美國綠卡？', 'votes':819, 'id':1, 'date':'02/15','asker':'spicycop',
     'candidateState':
     [{'candidateId':1,'state':'askedToJoin'},
      {'candidateId':2,'state':'notAsked'},
      {'candidateId':3,'state':'askedToJoin'},
      {'candidateId':4,'state':'askedToJoin'},
      {'candidateId':5,'state':'notAsked'},
      {'candidateId':6,'state':'askedToJoin'}]},
    {'title':'如何解決炒房問題？', 'votes':299,'id':2, 'date':'02/14','asker':'永和林志玲',
    'candidateState':
    [{'candidateId':1,'state':'askedToJoin'},
     {'candidateId':2,'state':'notAsked'},
     {'candidateId':3,'state':'askedToJoin'},
     {'candidateId':4,'state':'notAsked'},
     {'candidateId':5,'state':'askedToJoin'},
     {'candidateId':6,'state':'askedToJoin'}]},
    {'title':'是否支持廢死？為什麼？', 'votes':183, 'id':3, 'date':'02/01','asker':'廢死聯盟',
     'candidateState':[
     {'candidateId':1,'state':'askedToJoin'},
     {'candidateId':2,'state':'askedToJoin'},
     {'candidateId':3,'state':'askedToJoin'},
     {'candidateId':4,'state':'askedToJoin'},
     {'candidateId':5,'state':'askedToJoin'},
     {'candidateId':6,'state':'askedToJoin'}]},
    {'title':'對同志婚姻及多元成家的看法？', 'votes':153, 'id':4, 'date':'01/31','asker':'伴侶盟',
     'candidateState':[
      {'candidateId':1,'state':'askedToJoin'},
      {'candidateId':2,'state':'notAsked'},
      {'candidateId':3,'state':'askedToJoin'},
      {'candidateId':4,'state':'askedToJoin'},
      {'candidateId':5,'state':'notAsked'},
      {'candidateId':6,'state':'askedToJoin'}]},
    {'title':'對樂生問題的回應？', 'votes':154, 'id':5, 'date':'01/30','asker':'tantamount',
     'candidateState':[
      {'candidateId':1,'state':'notAsked'},
      {'candidateId':2,'state':'askedToJoin'},
      {'candidateId':3,'state':'notAsked'},
      {'candidateId':4,'state':'askedToJoin'},
      {'candidateId':5,'state':'notAske'},
      {'candidateId':6,'state':'notAsked'}]},
    {'title':'如何解決生育率的問題？', 'votes':756, 'id':6, 'date':'01/30','asker':'婦女新知',
     'candidateState':[
      {'candidateId':1,'state':'askedToJoin'},
      {'candidateId':2,'state':'notAsked'},
      {'candidateId':3,'state':'notAsked'},
      {'candidateId':4,'state':'notAsked'},
      {'candidateId':5,'state':'notAsked'},
      {'candidateId':6,'state':'notAsked'}]},
    {'title':'如何解決醫療五大皆空問題？', 'votes':801, 'id':7, 'date':'01/29','asker':'拎杯骨科',
     'candidateState':[
      {'candidateId':1,'state':'askedToJoin'},
      {'candidateId':2,'state':'askedToJoin'},
      {'candidateId':3,'state':'notAsked'},
      {'candidateId':4,'state':'notAsked'},
      {'candidateId':5,'state':'askedToJoin'},
      {'candidateId':6,'state':'askedToJoin'}]}];



});

