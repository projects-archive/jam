/**
 * @author Michael Amprimo
 */

var app = angular.module('jam', [
  'ngRoute','ngAnimate','counter','ngclipboard',

]);

/**
 * Routes
 */
app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
  $routeProvider
    .when("/", {
        templateUrl: "views/home.html",
        controller: "HomeCtrl",
        title: 'JAM icons - 420+ Premium Pixel perfect icons / free icofont',
        page : 'home',
        description : 'JAM icons is an open-sourced set of icons designed for illustrations, websites and applications. Vector based icons, the font icon is scalable to any size. Available in both SVG or fonts.'
    })
    .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl",
        title: 'About - 420+ Premium Pixel perfect icons / free icofont',
        page : 'about',
        description : 'What you can find in JAM icons, conditions of use and everything else.'
    })
    .when("/log", {
        templateUrl: "views/log.html",
        controller: "LogCtrl",
        title: 'Changelog - 420+ Premium Pixel perfect icons / free icofont',
        page : 'changelog',
        description : 'Informations about the evolution of this project. Number of icons, versions and more.'
    })
    .when("/licence", {
        templateUrl: "views/licence.html",
        controller: "LicenceCtrl",
        title: 'Licence - 420+ Premium Pixel perfect icons / free icofont',
        page : 'licence',
        description : 'All you have to know about the licensing of Jam Icons.'
    })
    .when("/404", {
        templateUrl: "views/404.html",
        controller: "404Ctrl",
        title: '404 - 420+ Premium Pixel perfect icons / free icofont'
    })
    .otherwise({redirectTo:'/404'});

}]);

app.run(['$rootScope', function($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

      if($rootScope.title){
        $rootScope.title = current.$$route.title;
      }
      else{
        $rootScope.title = 'JAM icons - 420+ Premium Pixel perfect icons / free icofont';
      }
      if($rootScope.description){
        $rootScope.description = current.$$route.description;
      }
      else{
        $rootScope.description = 'JAM icons is an open-sourced set of icons designed for illustrations, websites and applications. Vector based icons, the font icon is scalable to any size. Available in both SVG or fonts.';
      }
      var currentR = current.$$route.page;
      $rootScope.activeMenu = currentR;

    });
    $rootScope.$on('$stateChangeError', function(event) {
      $state.go('/404');
    });
}]);

/**
 * Controllers
 */
 app.controller('MainCtrl', ['$scope','$rootScope',function ($scope,$rootScope) {

   $scope.c = {
     to:422
   }

 }]);

 app.controller('404Ctrl', ['$scope',function ($scope) {}]);

app.controller('HomeCtrl', ['$scope','$rootScope','$timeout', function ($scope,$rootScope,$timeout) {

  $rootScope.c = {
    count:0
  }

  //Global icons list
  $scope.icons = {
    d: [ //directional (37)
      { name:'angle-down', alt:'Angle down' },
      { name:'angle-left', alt:'Angle left' },
      { name:'angle-right', alt:'Angle right' },
      { name:'angle-top', alt:'Angle top' },
      { name:'arrow-bottom', alt:'Arrow bottom' },
      { name:'arrow-left', alt:'Arrow left' },
      { name:'arrow-right', alt:'Arrow right' },
      { name:'arrow-top', alt:'Arrow top' },
      { name:'arrow-bottom-circle', alt:'Arrow bottom circle' },
      { name:'arrow-left-circle', alt:'Arrow left circle' },
      { name:'arrow-right-circle', alt:'Arrow right circle' },
      { name:'arrow-top-circle', alt:'Arrow top circle' },
      { name:'arrow-down-left', alt:'Arrow down left' },
      { name:'arrow-down-right', alt:'Arrow down right' },
      { name:'arrow-top-left', alt:'Arrow top left' },
      { name:'arrow-top-right', alt:'Arrow top right' },
      { name:'arrow-down-sm', alt:'Arrow down small' },
      { name:'arrow-left-sm', alt:'Arrow left small' },
      { name:'arrow-right-sm', alt:'Arrow right small' },
      { name:'arrow-top-sm', alt:'Arrow top small' },
      { name:'arrows-corners', alt:'Arrows corners' },
      { name:'arrows-fullscreen', alt:'Arrows fullscreen' },
      { name:'arrows-h', alt:'Arrows horizontal' },
      { name:'arrows-v', alt:'Arrows vertical' },
      { name:'caret-down', alt:'Caret down' },
      { name:'caret-left', alt:'Caret left' },
      { name:'caret-right', alt:'Caret right' },
      { name:'caret-top', alt:'Caret top' },
      { name:'caret-down-circle', alt:'Caret down circle' },
      { name:'caret-left-circle', alt:'Caret left circle' },
      { name:'caret-right-circle', alt:'Caret right circle' },
      { name:'caret-top-circle', alt:'Caret top circle' },
      { name:'move', alt:'Move' },
      { name:'redo', alt:'Redo' },
      { name:'split-h', alt:'Split horizontal' },
      { name:'split-v', alt:'Split vertical' },
      { name:'undo', alt:'Undo' },
    ],
    t: [ //text icons (18)
      { name:'align-center', alt:'Align center' },
      { name:'align-justify', alt:'Align justify' },
      { name:'align-left', alt:'Align left' },
      { name:'align-right', alt:'Align right' },
      { name:'bold', alt:'Bold' },
      { name:'code', alt:'Code' },
      { name:'font', alt:'Font' },
      { name:'heading', alt:'Heading' },
      { name:'indent', alt:'Indent' },
      { name:'italic', alt:'Italic' },
      { name:'link', alt:'Link' },
      { name:'o-list', alt:'Organized list' },
      { name:'outdent', alt:'Outdent' },
      { name:'paragraph', alt:'Paragraph' },
      { name:'strikethrough', alt:'Strikethrough' },
      { name:'table', alt:'Table' },
      { name:'u-list', alt:'Unorganized list' },
      { name:'underline', alt:'Underline' },
    ],
    s: [ //social icons (65)
      { name:'amazon', alt:'Amazon' },
      { name:'apple', alt:'Apple' },
      { name:'behance', alt:'Behance' },
      { name:'behance-circle', alt:'Behance circle' },
      { name:'behance-square', alt:'Behance square' },
      { name:'css3', alt:'Css3' },
      { name:'digg', alt:'Digg' },
      { name:'dribbble', alt:'dribbble' },
      { name:'dribbble-circle', alt:'Dribbble circle' },
      { name:'dribbble-square', alt:'Dribbble square' },
      { name:'dropbox', alt:'Dropbox' },
      { name:'facebook', alt:'Facebook' },
      { name:'facebook-circle', alt:'Facebook circle' },
      { name:'facebook-square', alt:'Facebook square' },
      { name:'flickr', alt:'Flickr' },
      { name:'flickr-circle', alt:'Flickr circle' },
      { name:'flickr-square', alt:'Flickr square' },
      { name:'github', alt:'Github' },
      { name:'github-alt', alt:'Github alt' },
      { name:'google', alt:'Goole' },
      { name:'google-plus', alt:'Google plus' },
      { name:'html5', alt:'Html5' },
      { name:'instagram', alt:'Instagram' },
      { name:'instagram-circle', alt:'Instagram circle' },
      { name:'instagram-square', alt:'Instagram square' },
      { name:'jsfiddle', alt:'JsFiddle' },
      { name:'linkedin', alt:'Linkedin' },
      { name:'linkedin-circle', alt:'Linkedin circle' },
      { name:'linkedin-square', alt:'Linkedin square' },
      { name:'paypal', alt:'Paypal' },
      { name:'pinterest', alt:'Pinterest' },
      { name:'pinterest-circle', alt:'Pinterest circle' },
      { name:'pinterest-square', alt:'Pinterest square' },
      { name:'reddit', alt:'Reddit' },
      { name:'slack', alt:'Slack' },
      { name:'snapchat', alt:'Snapchat' },
      { name:'snapchat-circle', alt:'Snapchat circle' },
      { name:'snapchat-square', alt:'Snapchat square' },
      { name:'soundcloud', alt:'Soundcloud' },
      { name:'spotify', alt:'Spotify' },
      { name:'spotify-circle', alt:'Spotify circle' },
      { name:'spotify-square', alt:'Spotify square' },
      { name:'stack-overflow', alt:'Stack Overflow' },
      { name:'tumblr', alt:'Tumblr' },
      { name:'tumblr-circle', alt:'Tumblr circle' },
      { name:'tumblr-square', alt:'Tumblr square' },
      { name:'twitch', alt:'Twitch' },
      { name:'twitter', alt:'Twitter' },
      { name:'twitter-circle', alt:'Twitter circle' },
      { name:'twitter-square', alt:'Twitter square' },
      { name:'viadeo', alt:'Viadeo' },
      { name:'vimeo', alt:'Vimeo' },
      { name:'vimeo-circle', alt:'Vimeo circle' },
      { name:'vimeo-square', alt:'Vimeo square' },
      { name:'vine', alt:'Vine' },
      { name:'vine-circle', alt:'Vine circle' },
      { name:'vine-square', alt:'Vine square' },
      { name:'whatsapp', alt:'Whatsapp' },
      { name:'wikipedia', alt:'Wikipedia' },
      { name:'wikipedia-circle', alt:'Wikipedia circle' },
      { name:'wikipedia-square', alt:'Wikipedia square' },
      { name:'wordpress', alt:'Wordpress' },
      { name:'yahoo', alt:'Yahoo' },
      { name:'yelp', alt:'Yelp' },
      { name:'youtube', alt:'YouTube' },
    ],
    p: [ //player icons (28)
      { name:'backward', alt:'Backward' },
      { name:'eject', alt:'Eject' },
      { name:'forward', alt:'Forward' },
      { name:'next', alt:'Next' },
      { name:'pause', alt:'Pause' },
      { name:'play', alt:'Play' },
      { name:'stop', alt:'Stop' },
      { name:'rec', alt:'Rec' },
      { name:'previous', alt:'Previous' },
      { name:'volume-down', alt:'Volume down' },
      { name:'volume-mute', alt:'Volume mute' },
      { name:'volume', alt:'Volume' },
      { name:'volume-up', alt:'Volume up' },
      { name:'power', alt:'Power' },
      { name:'random', alt:'Random' },
      { name:'backward-f', alt:'Backward filled' },
      { name:'eject-f', alt:'Eject filled' },
      { name:'forward-f', alt:'Forward filled' },
      { name:'next-f', alt:'Next filled' },
      { name:'pause-f', alt:'Pause filled' },
      { name:'play-f', alt:'Play filled' },
      { name:'previous-f', alt:'Previous filled' },
      { name:'rec-f', alt:'Rec filled' },
      { name:'stop-f', alt:'Stop filled' },
      { name:'volume-down-f', alt:'Volume down filled' },
      { name:'volume-mute-f', alt:'Volume mute filled' },
      { name:'volume-f', alt:'Volume filled' },
      { name:'volume-up-f', alt:'Volume up filled' },
    ],
    w: [ //web icons (268)
      { name:'anchor', alt:'Anchor' },
      { name:'attachement', alt:'Attachement' },
      { name:'backpack', alt:'Backpack' },
      { name:'balloon', alt:'Balloon' },
      { name:'bandage', alt:'Bandage' },
      { name:'bar-chart', alt:'Bar chart' },
      { name:'baseball', alt:'Baseball' },
      { name:'battery-charging', alt:'Battery charging' },
      { name:'battery-empty', alt:'Battery empty' },
      { name:'battery-full', alt:'Battery full' },
      { name:'battery-quarter', alt:'Battery quarter' },
      { name:'battery-two-quarter', alt:'Battery two quarter' },
      { name:'beer', alt:'Beer' },
      { name:'bell', alt:'Bell' },
      { name:'bell-f', alt:'Bell filled' },
      { name:'bell-off', alt:'Bell off' },
      { name:'bell-off-f', alt:'Bell off filled' },
      { name:'birthday-cake', alt:'Birthday cake' },
      { name:'book', alt:'Book' },
      { name:'bookmark', alt:'Bookmark' },
      { name:'bookmark-f', alt:'Bookmark filled' },
      { name:'box', alt:'Box' },
      { name:'box-f', alt:'Box filled' },
      { name:'brightness', alt:'Brightness' },
      { name:'brightness-down', alt:'Brightness down' },
      { name:'brightness-up', alt:'Brightness up' },
      { name:'brush', alt:'Brush' },
      { name:'bus', alt:'Bus' },
      { name:'cactus', alt:'Cactus' },
      { name:'calculator', alt:'Calculator' },
      { name:'calendar', alt:'Calendar' },
      { name:'calendar-alt', alt:'Calendar alt' },
      { name:'camera', alt:'Camera' },
      { name:'camera-alt', alt:'Camera alt' },
      { name:'candle', alt:'Candle' },
      { name:'car', alt:'Car' },
      { name:'castle', alt:'Castle' },
      { name:'check', alt:'Check' },
      { name:'chess', alt:'Chess' },
      { name:'close', alt:'Close' },
      { name:'cloud', alt:'Cloud' },
      { name:'cloud-f', alt:'Cloud filled' },
      { name:'coffee-cup', alt:'Coffee cup' },
      { name:'coffee-cup-f', alt:'Coffee cup filled' },
      { name:'cog', alt:'Cog' },
      { name:'cog-f', alt:'Cog filled' },
      { name:'cogs', alt:'Cogs' },
      { name:'cogs-f', alt:'Cogs filled' },
      { name:'compass', alt:'Compass' },
      { name:'computer', alt:'Computer' },
      { name:'computer-alt', alt:'Computer alt' },
      { name:'credit-card', alt:'Credit card' },
      { name:'credit-card-f', alt:'Credit card filled' },
      { name:'cutlery', alt:'Cutlery' },
      { name:'cutter', alt:'Cutter' },
      { name:'dashboard', alt:'Dashboard' },
      { name:'dashboard-f', alt:'Dashboard filled' },
      { name:'database', alt:'Database' },
      { name:'deejay', alt:'Deejay' },
      { name:'direction', alt:'Direction' },
      { name:'direction-f', alt:'Direction filled' },
      { name:'directions', alt:'Directions' },
      { name:'directions-f', alt:'Directions filled' },
      { name:'disc', alt:'Disc' },
      { name:'dna', alt:'Dna' },
      { name:'document', alt:'Document' },
      { name:'document-f', alt:'Document filled' },
      { name:'download', alt:'Download' },
      { name:'egg', alt:'Egg' },
      { name:'egg-f', alt:'Egg filled' },
      { name:'eggs', alt:'Eggs' },
      { name:'envelope', alt:'Envelope' },
      { name:'envelope-f', alt:'Envelope filled' },
      { name:'envelope-open', alt:'Envelope open' },
      { name:'envelope-open-f', alt:'Envelope open filled' },
      { name:'eye', alt:'Eye' },
      { name:'eye-cross', alt:'Eye cross' },
      { name:'feather-pen', alt:'Feather pen' },
      { name:'female', alt:'Female' },
      { name:'file', alt:'File' },
      { name:'files', alt:'Files' },
      { name:'fingerprint', alt:'Fingerprint' },
      { name:'fish', alt:'Fish' },
      { name:'flag', alt:'Flag' },
      { name:'flag-f', alt:'Flag filled' },
      { name:'flame', alt:'Flame' },
      { name:'flashlight-off', alt:'Flashlight off' },
      { name:'flashlight-on', alt:'Flashlight on' },
      { name:'flask', alt:'Flask' },
      { name:'flask-alt', alt:'Flask alt' },
      { name:'flower', alt:'Flower' },
      { name:'folder', alt:'Folder' },
      { name:'folder-f', alt:'Folder filled' },
      { name:'football', alt:'Football' },
      { name:'gamepad', alt:'Gamepad' },
      { name:'gamepad-retro', alt:'Gamepad retro' },
      { name:'ghost', alt:'Ghost' },
      { name:'ghost-f', alt:'Ghost filled' },
      { name:'gift', alt:'Gift' },
      { name:'glass-empty', alt:'Glass empty' },
      { name:'glass-filled', alt:'Glass filled' },
      { name:'glue', alt:'Glue' },
      { name:'gps', alt:'Gps' },
      { name:'gps-f', alt:'Gps filled' },
      { name:'graphic-chart', alt:'Graphic chart' },
      { name:'hair-dryer', alt:'Hair dryer' },
      { name:'hammer', alt:'Hammer' },
      { name:'hashtag', alt:'Hashtag' },
      { name:'headphone', alt:'Headphone' },
      { name:'heart', alt:'Heart' },
      { name:'heart-f', alt:'Heart filled' },
      { name:'helmet', alt:'Helmet' },
      { name:'highlighter', alt:'Highlighter' },
      { name:'home', alt:'Home' },
      { name:'home-f', alt:'Home filled' },
      { name:'hourglass', alt:'Hourglass' },
      { name:'ice-cream', alt:'Ice cream' },
      { name:'ice-cream-f', alt:'Ice cream filled' },
      { name:'id-card', alt:'Id card' },
      { name:'info', alt:'Info' },
      { name:'joystick', alt:'Joystick' },
      { name:'key', alt:'Key' },
      { name:'keyboard', alt:'Keyboard' },
      { name:'language', alt:'Language' },
      { name:'levels', alt:'Levels' },
      { name:'life-bouy', alt:'Life bouy' },
      { name:'light-bulb', alt:'Light bulb' },
      { name:'line-chart', alt:'Line chart' },
      { name:'luggage', alt:'Luggage' },
      { name:'magic', alt:'Magic' },
      { name:'magnet', alt:'Magnet' },
      { name:'male', alt:'Male' },
      { name:'map-marker', alt:'Map marker' },
      { name:'map-marker-f', alt:'Map marker filled' },
      { name:'medal', alt:'Medal' },
      { name:'message', alt:'Message' },
      { name:'message-writing', alt:'Message writing' },
      { name:'messages', alt:'Messages' },
      { name:'message-alt', alt:'Message alt' },
      { name:'message-writing-alt', alt:'Message writing alt' },
      { name:'message-f', alt:'Message filled' },
      { name:'message-writing-f', alt:'Message writing filled' },
      { name:'messages-f', alt:'Messages filled' },
      { name:'message-alt-f', alt:'Message alt filled' },
      { name:'message-writing-alt-f', alt:'Message writing alt filled' },
      { name:'mic', alt:'Mic' },
      { name:'minus', alt:'Minus' },
      { name:'moon', alt:'Moon' },
      { name:'moon-f', alt:'Moon filled' },
      { name:'more', alt:'More' },
      { name:'more-f', alt:'More filled' },
      { name:'more-alt', alt:'More alt' },
      { name:'more-alt-f', alt:'More alt filled' },
      { name:'motor-cycle', alt:'Motor cycle' },
      { name:'mountain', alt:'Mountain' },
      { name:'mountains', alt:'Mountains' },
      { name:'movie', alt:'Movie' },
      { name:'news', alt:'News' },
      { name:'padlock', alt:'Padlock' },
      { name:'padlock-f', alt:'Padlock filled' },
      { name:'padlock-open', alt:'Padlock open' },
      { name:'padlock-open-f', alt:'Padlock open filled' },
      { name:'padlock-alt', alt:'Padlock alt' },
      { name:'padlock-alt-open', alt:'Padlock alt open' },
      { name:'paper-plane', alt:'Paper plane' },
      { name:'paper-plane-f', alt:'Paper plane filled' },
      { name:'pen', alt:'Pen' },
      { name:'pencil', alt:'Pencil' },
      { name:'phone', alt:'Phone' },
      { name:'picture', alt:'Picture' },
      { name:'pictures', alt:'Pictures' },
      { name:'pie-chart', alt:'Pie chart' },
      { name:'pie-chart-alt', alt:'Pie chart alt' },
      { name:'pin', alt:'Pin' },
      { name:'pin-f', alt:'Pin filled' },
      { name:'pin-alt', alt:'Pin alt' },
      { name:'pin-alt-f', alt:'Pin alt filled' },
      { name:'pizza-slice', alt:'Pizza slice' },
      { name:'pizza-slice-f', alt:'Pizza slice filled' },
      { name:'plane', alt:'Plane' },
      { name:'plug', alt:'Plug' },
      { name:'plus', alt:'Plus' },
      { name:'pocket-watch', alt:'Pocket watch' },
      { name:'popcorn', alt:'Popcorn' },
      { name:'printer', alt:'Printer' },
      { name:'qr-scan', alt:'Qr scan' },
      { name:'rocket', alt:'Rocket' },
      { name:'rss-feed', alt:'Rss feed' },
      { name:'rubber', alt:'Rubber' },
      { name:'ruler', alt:'Ruler' },
      { name:'scissors', alt:'Scissors' },
      { name:'screwdriver', alt:'ScrewDriver' },
      { name:'search', alt:'Search' },
      { name:'set-square', alt:'Set square' },
      { name:'share-alt', alt:'Share alt' },
      { name:'share', alt:'Share' },
      { name:'shield', alt:'Shield' },
      { name:'shield-f', alt:'Shield filled' },
      { name:'shield-half', alt:'Shield half' },
      { name:'shield-check', alt:'Shield check' },
      { name:'shield-error', alt:'Shield error' },
      { name:'shield-check-f', alt:'Shield check filled' },
      { name:'shield-error-f', alt:'Shield error filled' },
      { name:'shop', alt:'Shop' },
      { name:'shopping-bag', alt:'Shopping bag' },
      { name:'shopping-bag-f', alt:'Shopping bag filled' },
      { name:'shopping-bag-alt', alt:'Shopping bag alt' },
      { name:'shopping-bag-alt-f', alt:'Shopping bag alt filled' },
      { name:'shopping-cart', alt:'Shopping cart' },
      { name:'shopping-cart-f', alt:'Shopping cart filled' },
      { name:'signal', alt:'Signal' },
      { name:'smiley', alt:'Smiley' },
      { name:'snowboard', alt:'Snowboard' },
      { name:'snowflake', alt:'Snowflake' },
      { name:'soccer', alt:'Soccer' },
      { name:'speaker', alt:'Speaker' },
      { name:'stamp', alt:'Stamp' },
      { name:'star', alt:'Star' },
      { name:'star-f', alt:'Star filled' },
      { name:'star-half', alt:'Star half' },
      { name:'stop-sign', alt:'Stop (sign)' },
      { name:'sword', alt:'Sword' },
      { name:'tag', alt:'Tag' },
      { name:'tag-f', alt:'Tag filled' },
      { name:'tags', alt:'Tags filled' },
      { name:'target', alt:'Target' },
      { name:'task', alt:'Task' },
      { name:'thermometer-empty', alt:'Thermometer empty' },
      { name:'thermometer-full', alt:'Thermometer full' },
      { name:'thunder', alt:'Thunder' },
      { name:'thunder-f', alt:'Thunder filled' },
      { name:'ticket', alt:'Ticket' },
      { name:'time', alt:'Time' },
      { name:'tools', alt:'Tools' },
      { name:'torch', alt:'Torch' },
      { name:'totem', alt:'Totem' },
      { name:'train', alt:'Train' },
      { name:'transgender', alt:'Transgender' },
      { name:'trash', alt:'Trash' },
      { name:'trash-f', alt:'Trash filled' },
      { name:'trash-alt', alt:'Trash alt' },
      { name:'tree', alt:'Tree' },
      { name:'tree-f', alt:'Tree filled' },
      { name:'tree-alt', alt:'Tree alt' },
      { name:'tree-alt-f', alt:'Tree alt filled' },
      { name:'trophy', alt:'Trophy' },
      { name:'tube', alt:'Tube' },
      { name:'umbrella', alt:'Umbrella' },
      { name:'umbrella-f', alt:'Umbrella filled' },
      { name:'universe', alt:'Universe' },
      { name:'upload', alt:'Upload' },
      { name:'user', alt:'User' },
      { name:'user-f', alt:'User filled' },
      { name:'users', alt:'Users' },
      { name:'users-f', alt:'Users filled' },
      { name:'video-camera', alt:'Video camera' },
      { name:'video-camera-vintage', alt:'Video camera vintage' },
      { name:'voicemail', alt:'Voicemail' },
      { name:'water-drop', alt:'Water drop' },
      { name:'water-drop-f', alt:'Water drop filled' },
      { name:'wheel', alt:'Wheel' },
      { name:'wifi', alt:'WiFi' },
      { name:'wine-bottle', alt:'Wine bottle' },
      { name:'wrench', alt:'Wrench' },
      { name:'write', alt:'Write' },
      { name:'zoom-plus', alt:'Zoom plus' },
      { name:'zoom-minus', alt:'Zoom minus' },
    ]
  }


  $scope.onSuccess = function(e) {

      showTooltip(e.trigger, 'Copied!');
      e.clearSelection();
  };


  $rootScope.home = true;
  $rootScope.about = false;
  $scope.search = null;

  $scope.filterItem = function(item) {
    if (!$scope.search) return true;

    var found = item.name.toLowerCase().indexOf($scope.search.toLowerCase()) != -1;

    if (!found) {
      angular.forEach(item.children, function(item) {
        var match = $scope.filterItem(item);
        if (match) {
          found = true;
        }
      });
    }
    return found;
  };

}]);

app.controller('AboutCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
  //$scope.$parent.animate = false;
  $scope.c = {
    count:0,
    to:422
  }

  $rootScope.about = true;
  $rootScope.home = false;
  $rootScope.isprj = false;
}]);

app.controller('LicenceCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
  //$scope.$parent.animate = false;
  $scope.c = {
    count:0,
    to:422
  }

  $rootScope.licence = true;
  $rootScope.home = false;
  $rootScope.isprj = false;
}]);

app.controller('LogCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
  //$scope.$parent.animate = false;
  $scope.c = {
    count:0,
    to:422
  }

  $rootScope.log = true;
  $rootScope.home = false;
  $rootScope.isprj = false;
}]);

app.directive('copyEl', function(){
    return {
        link: function (scope, element, attrs){
        scope.onSuccess = function(e) {
          showTooltip(e.trigger)
            setTimeout(function () {
              removeTooltip(e.trigger)
            }, 1000);
            e.clearSelection();
        };
          function showTooltip(elem) {
              elem.setAttribute('class', 'copied');
          }
          function removeTooltip(elem) {
              elem.removeAttribute('class', 'copied');
          }
        }
    };
});
