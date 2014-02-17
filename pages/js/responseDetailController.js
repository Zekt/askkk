askControllers.controller('responseDetailCtrl', function($scope){

  semanticMenuReady();
  semanticAccordingReady();
  $scope.candidates = global.candidates;

  $scope.goToTop = function(){

     var body = $("html, body");
     body.animate({scrollTop:0}, '500', 'swing');
  };

  $scope.data =
    {'title':'如何解決醫療五大皆空問題？', 
     'questionId':7, 
     'votes':1801,
     'content':['面對醫師及護理人員不斷出走，各界說法都把矛頭指向台灣整體醫療制度的缺陷，讓吃力不討好的醫療人員如廉價勞工，台北榮民總醫院院長林芳郁24日表示，內、外、婦、兒、急診五大皆空已是事實，若不立即重建醫療制度，「醫療體制將在5年到10年內瓦解。」',
           '醫療費用占GDP(國內生產毛額)不到6%，醫護人力被當成便宜勞工或外勞運作，所以就只好走出醫院另尋其他跑道。他說，整體制度需要重新檢討，一起討論如何建立好的制度，現在重建還來得及，「否則在可預見的5年到10年間，醫療體制將會瓦解。」',
           '林芳郁指出，健保局解決五大皆空問題的方法是加碼健保給付與相關費用，但健保費用是固定的，加碼的費用只是拿別科別的來補，「這是揩別人的油，非腳踏實地的方法。'],

     'date':'2014-01-30',
     'category':['醫療','五大皆空','全民健保'],
     'asker':{"name":"soidid","city":"台北市","district":"大安區"},
     'signature':[
             {"name":"afike0123","city":"台北市","district":"大安區","date":"2014-02-01","order":6},
             {"name":"bee","city":"台北市","district":"萬華區","date":"2014-01-31","order":5},
             {"name":"洪偉","city":"台北市","district":"大同區","date":"2014-01-31","order":4},
             {"name":"g0ver","city":"台北市","district":"中正區","date":"2014-01-30","order":3},
             {"name":"hello","city":"台北市","district":"文山區","date":"2014-01-29","order":2},
             {"name":"soidid","city":"台北市","district":"文山區","date":"2014-01-29","order":1}
             ],
     'addressedTo':
     [{"name":'丁守中',"id":1,"state":"answered"},
      {"name":'顧立雄',"id":2,"state":"pending","pendingDays":12},
      {"name":'呂秀蓮',"id":5,"state":"pending","pendingDays":2},
      {"name":'柯文哲',"id":6,"state":"answered"}
     ],
     'responses':
     [ 
       {'responseId':7, 
        'responseDate':'2014-01-30',
        'responseAbstract':'落實工時規範',
        'responseVoteUp':123,
        'responseVoteDown':32,
        'responseContent':[
         "台大醫院創傷醫學部主任柯文哲妻子陳佩琪，今接受《蘋果》專訪時說，外界常批評柯亂講話，她有點替老公抱屈，因為重症醫療常得在30秒、1分鐘內做好決定才救得到人，結果也養成柯有話直說的習慣，她會持續鞭策柯「有話慢慢講」，但她也指，柯文哲對台灣權貴醫療的生態也有責任。",
         "陳佩琪表示，柯文哲有些話是實話，例如「民進黨有2個太陽」、「要我(柯文哲)入(民進)黨是趕獅子進籠」，但有些話則不然，例如「連勝文是權貴才會得到台大迅速救治」，連是否權貴，社會自有公評，但他能享權貴式醫療，「是你們台大醫師給的，包括你柯文哲在內」，所以講這句話就不應該。"
         ],
        'responser':{'name':'柯文哲','id':6}

       },
       {'responseId':8, 
        'responseDate':'2014-01-30',
        'responseAbstract':'提高薪水',
        'responseVoteUp':9003,
        'responseVoteDown':3122,
        'responseContent':[
         "台大醫院創傷醫學部主任柯文哲妻子陳佩琪，今接受《蘋果》專訪時說，外界常批評柯亂講話，她有點替老公抱屈，因為重症醫療常得在30秒、1分鐘內做好決定才救得到人，結果也養成柯有話直說的習慣，她會持續鞭策柯「有話慢慢講」，但她也指，柯文哲對台灣權貴醫療的生態也有責任。",
         "陳佩琪表示，柯文哲有些話是實話，例如「民進黨有2個太陽」、「要我(柯文哲)入(民進)黨是趕獅子進籠」，但有些話則不然，例如「連勝文是權貴才會得到台大迅速救治」，連是否權貴，社會自有公評，但他能享權貴式醫療，「是你們台大醫師給的，包括你柯文哲在內」，所以講這句話就不應該。"
         ],
         'responser':{'name':'丁守中','id':1}
        
       }
     ]

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





});

