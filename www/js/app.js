
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'starter.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
     // openFB.init({appId: '867006893383189', tokenStore: window.localStorage});
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

})

/*.config(function($cordovaFacebookProvider) {
  var appID = 867006893383189;
  var version = "v2.0"; // or leave blank and default is v2.0
  $cordovaFacebookProvider.browserInit(appID, version);
})*/

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

  // setup an abstract state for the tabs directive
  .state('login', {
        url: '/',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })
  .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/search/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })
  .state('tab.result', {
    url: '/search/result',
    views: {
      'tab-search': {
        templateUrl: 'templates/search/result.html',
        controller: "ResultCtrl"
      }
    }
  })
  .state('tab.result-detail', {
      url: '/search/result/:resId',
      views: {
        'tab-search': {
          templateUrl: 'templates/search/result-detail.html',
          controller: 'ResultDetailCtrl'
        }
      }
    })

  .state('tab.search-map', {
    url: '/search/search_map',
    views: {
        'tab-search': {
          templateUrl: 'templates/search/result-map.html',
          controller: 'ResultMapCtrl'
        }
      }
  })

  .state('tab.rent', {
    url: '/rent',
    views: {
        'tab-rent': {
            templateUrl: 'templates/rent/tab-rent.html'  ,
            controller: 'RentCtrl'
            }
        }
    })
  .state('tab.rentDetail', {
        url: '/rent/pubblicati/:rentID',
        views: {
            'tab-rent': {
            templateUrl: 'templates/rent/rent-detail.html',
            controller: 'RentDetailCtrl'

            }
        }
    })

  .state('tab.bozzaDetail', {
        url: '/rent/bozze/:bozzaID',
        views: {
            'tab-rent': {
            templateUrl: 'templates/rent/bozza-detail.html',
            controller: 'BozzeDetailCtrl'

            }
        }
    })
  .state('tab.rent.pubblicati', {
        url: '/pubblicati',
        views: {
            'rent-page': {
            templateUrl: 'templates/rent/pubblicati.html',
                //abstract:'true',
            controller: 'RentPubblicatiCtrl'
            }
        }
    })
  .state('tab.rent.bozze', {
        url: '/bozze',
        views: {
            'rent-page': {
            templateUrl: 'templates/rent/bozze.html',
            controller: 'RentBozzeCtrl'
            }
        }
    })
 /* .state('tab.rent.nuovo',{
      url: '/nuovo',
        views: {
            'rent-nuovo': {
            templateUrl: 'templates/rent/bozze.html'
            }
        }
  })*/

  
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  
  .state('tab.favourite', {
    url: '/favourites',
    views: {
      'tab-favourite': {
        templateUrl: 'templates/favourite/tab-favourite.html'
      }
    }
  })

  .state('tab.map', {
    url: '/favourites/map',
    views: {
        'tab-favourite': {
          templateUrl: 'templates/favourite/favourite-map.html',
          controller: 'MapCtrl'
        }
      }
  })

  .state('tab.favourite-detail', {
      url: '/favourites/:favId',
      views: {
        'tab-favourite': {
          templateUrl: 'templates/favourite/favourite-detail.html',
          controller: 'FavouriteDetailCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

    $ionicConfigProvider.backButton.text('').icon('ion-chevron-left');
}])

.directive('stringToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(value) {
        return '' + value;
      });
      ngModel.$formatters.push(function(value) {
        return parseFloat(value, 10);
      });
    }
  };
});

