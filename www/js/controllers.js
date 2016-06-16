angular.module('starter.controllers', [])

    .controller('channelCtrl', function($scope, httpFactory, $state){
        console.log("hhhh");
        httpFactory.do('data/channel.json').then(function(res){
            console.log("res =", res.data.data)
            $scope.chanels = res.data.data;
        }, function(err){ //带有错误信息的resp
            console.log("err =", err)
        });

        $scope.clickType = function(id){

            if(id == '1'){
                $state.go('weibo');
                console.log("id==", id);
            }
        }
    })

    .controller('hotnewsCtrl', function($scope, HotNews){

        HotNews.then(function(res){ //resp是一个响应对象
            $scope.newsdata = res.data.data;
        }, function(err){ //带有错误信息的resp
            console.log("err =", err)
        });

        $scope.imgclass = 'item-thumbnail-left';
        /*console.log("$scope.newsdata 2222=",$scope.newsdata)*/
    })

    .controller('VideoCtrl', function($scope, $stateParams, Chats, $state){
        console.log("tttt")
        // $state.go('tab.weibo');
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats){
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function($scope){
        $scope.settings = {
            enableFriends : true
        };
    })

    .controller('WeiboCtrl', function($scope){

    })