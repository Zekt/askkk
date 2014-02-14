askControllers.controller('questionDetailCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();

  $scope.candidates = global.candidates;

  $scope.goToTop = function(){

     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };
  

  // for sign question area keep floating
  var nav = $('#sign-question');

    $(window).scroll(function () {
      
        if ($(this).scrollTop() > 230) {
            nav.addClass("f-nav");
            nav.removeClass("f-fix");

        } else {
            nav.removeClass("f-nav");
            nav.addClass("f-fix");

        }
    });

 
$scope.data =
{
'title':'鄉民都來了：網路中立性立法及問題',
'content':['經濟部智慧財產局欲修法封鎖海外侵權網站，引發網友持續震怒，除日前BBS網站批踢踢（PTT）發起百萬連署抗議，更有網友發起「六四網路全黑日」，並揚言留言「灌爆」總統馬英九的臉書粉絲專頁，以示抗議決心！',
           '「搞什麼，『制裁』都不『智財』了！」批踢踢鄉民開設反智財局討論專版（StopIPO），發起「反對智財局研議封鎖重大境外侵權網站」的網路連署，號召百萬民眾維護網路自主，公開向智財局嗆聲。鄉民直指網路自由不容侵犯，「智慧財產局侵犯我言論自由的圖謀，我無法接受。」',
           '更有網友於臉書（Facebook）發起「斷然反對鎖國，堅決主張百分之百網路自由」連署，訂定明天為「網路全黑日」，盼網友把大頭貼、封面相片都換成黑色，以示抗議智財局決心。發起人更說，除換上全黑照片外，更要民眾前往總統馬英九臉書，向總統表達最沉痛的怒吼，迄今已有超過4萬人加入。'],

'date':'2014-01-30',
'category':['網路','自由','隱私'],
'asker':{"lastName":"王","firstName":"小曼","city":"台北市","district":"大安區"},
'signature':[
{"lastName":"王","firstName":"靜","city":"台北市","district":"大安區","date":"2014-02-01","order":121},
{"lastName":"張","firstName":"同一","city":"台北市","district":"萬華區","date":"2014-01-31","order":120},
{"lastName":"高","firstName":"洪偉","city":"台北市","district":"大同區","date":"2014-01-31","order":119},
{"lastName":"黃","firstName":"耕農","city":"台北市","district":"中正區","date":"2014-01-30","order":118},
{"lastName":"李","firstName":"秉其","city":"台北市","district":"文山區","date":"2014-01-29","order":117},
{"lastName":"林","firstName":"書煜","city":"台北市","district":"士林區","date":"2014-01-28","order":116}
]


};





});

