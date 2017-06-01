 ;(function(){
        var directives =angular.module('directive',[]);
        //头部
            directives.directive('wheader',function(){
               return {
                templateUrl:'../js/src/top.html'
               }
            });
            //尾部swiper
            directives.directive('wfooter',function(){
                return {
                      templateUrl:'../js/src/wfooter.html'
                }
            })
            //轮播图
            directives.directive('wswiper',function(){
                return {
                      templateUrl:'../js/src/wswiper.html'
                }
            })

            //搜索
            directives.directive('wsearch',function(){
                return {
                      templateUrl:'../js/src/search.html'
                }
            })

            //新闻框
            directives.directive('wloadmore',function(){
                return {
                      templateUrl:'../js/src/wloadmore.html'
                }
            })
            //加载中遮罩层
            directives.directive("wloading", function() {
              return {
                templateUrl: "../js/src/loading.html",
              }
            })
            //弹窗
            directives.directive("wchuang", function() {
              return {
                templateUrl: "../js/src/tanchuang.html",
              }
            })
            //点击变大图
            directives.directive("bigimg", function() {
              return {
                templateUrl: "../js/src/bigimg.html",
              }
            })

            directives.directive("ylloadmore", function() {
              return {
                templateUrl: "../js/src/ylloadmore.html",
              }
            })

     })();