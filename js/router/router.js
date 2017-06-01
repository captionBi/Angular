;(function(){
         var router =angular.module('router',[]);
            router.config(function($stateProvider,$urlRouterProvider){
                $stateProvider.state('index',{
                    url:'/index',
                    templateUrl:'index.html',
                    controller:'index'
                }).state('index.recommend',{
                    url:'/recommend',
                    templateUrl:'recommend.html',
                    controller:'recommendCtrl'
                }).state('index.details',{
                    url:'/details/:xx',
                    templateUrl:'details.html',
                    controller:'detailsCtrl'
                })



                .state('index.entertain',{
                    url:'/entertain',
                    templateUrl:'entertain.html',
                    controller:'entertainCtrl'
                }).state('index.yldetail',{
                    url:'/yldetails/:id',
                    templateUrl:'yldetail.html',
                    controller:'yldetailCtrl'
                })



                .state('index.society',{
                    url:'/society',
                    templateUrl:'society.html',
                    controller:'societyCtrl'
                }).state('index.military',{
                    url:'/military',
                    templateUrl:'military.html',
                    controller:'militaryCtrl'
                })

                $urlRouterProvider.when('','/index/recommend')
            })
    })();