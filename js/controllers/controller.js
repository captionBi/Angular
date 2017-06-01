  ;(function(){
        var controllers =angular.module('controller',[]);
            controllers.controller('index',function($scope,$state,$location){
                $scope.name='今日头条';
                //console.log(typeof $location.url());
                $scope.urlOn=$location.url();
                //console.log($state.params);
                 $scope.itemOn=function(item){
                   
                    $scope.item=item;
    
                };

                if($scope.urlOn=='/index/recommend'){
                    $scope.item=0;
                    console.log($scope.item)
                }else if($scope.urlOn=='/index/entertain'){
                     $scope.item=1;
                     console.log($scope.item)
                }else if($scope.urlOn=='/index/society'){
                     $scope.item=2;
                     console.log($scope.item)
                }else if($scope.urlOn=='/index/military'){
                     $scope.item=3;
                     console.log($scope.item)
                }
            });
            controllers.controller('recommendCtrl',function($scope,$http,$state,$location){
                 $scope.name='推荐';
                  $scope.news=[];
                  $scope.page=0;
                   $scope.isLoading=false;
                   console.log($location.search());
                console.log($state.params)
                 $scope.loadMore=function(){
                    $scope.isLoading=true;
                    setTimeout(function(){
                        $http({
                            url:'../json/news.json',
                            method:'GET',
                            params: {
                                channel_id: 6,
                                page: $scope.page++
                            }
                        }).then(function(data){
                         
                            $scope.isLoading=false;//一进来就加载 然后在加载成功后把正在加载这个功能去除

                            
                            //$scope.news=$scope.news.concat(data.data.news_list);
                             $scope.news=data.data.news_list.concat($scope.news);
                            
                        })
                    },500); 
                 }

                 $scope.loadMore();

                 //清空输入框内容
                 $scope.searchName='';
                 $scope.searchClear=function(){
                   $scope.searchName='';
                 }



                 //弹窗
                 $scope.isShowdialog=false;
                 $scope.showdialog=function(){
                     $scope.isShowdialog=true;
                 }
            })

            //推荐详情页
            controllers.controller('detailsCtrl',function($scope,$location,$http,$state){
                console.log($location.search());//只能获取问号后面的参数  现在用/来代替了所以用不了，若想用就  用#!/来代替/
                console.log($state.params)  
                $http({
                    url:'../json/news.json',
                    method:'GET',
                    // params:{
                    //     id:'$state.params.id'
                    // }
                  
                }).then(function(data){
                    console.log(data)
                   $scope.newData=data.data.news_list;

                   for(var i=0;i<$scope.newData.length;i++){
                    if($scope.newData[i].id==$state.params.xx){
                        $scope.title=$scope.newData[i].title;
                        $scope.text=$scope.newData[i].text;
                        $scope.image=$scope.newData[i].image;
                    }
                   }
                    
                })


                $scope.isShowGallery=false;
                $scope.showGallery=function(){
                      $scope.isShowGallery=true;
                }
            })


            controllers.controller('entertainCtrl',function($scope,$http){
                $scope.isLoading=false;
                $scope.name='娱乐';
                $scope.page=1;
                $scope.news=[];
                $scope.ylloadingmore=function(){

                    $scope.isLoading=true;
                    setTimeout(function(){
                        $scope.page++;
                        $http({
                            type:'get',
                            url:'https://cnodejs.org/api/v1/topics?limit=10&page='+ $scope.page,
                            //params:{page:$scope.page,limit:5}  可以传参
                        }).then(function(data){
                            $scope.isLoading=false;
                            $scope.news= $scope.news.concat(data.data.data)
                            console.log($scope.news)
                        })
                    },500)
                    
                }

                $scope.ylloadingmore();

                $scope.isShowSearchBar=false

                //清空输入框内容
                 $scope.searchName='';
                 $scope.searchClear=function(){
                   $scope.searchName='';
                   console.log('yl')
                 }
                

            })
            //娱乐详情页
            controllers.controller('yldetailCtrl',function($scope,$http,$state,$window,$sce){
                console.log($state.params.id);
                console.log($window.location.hash)
                $http({
                        type:'get',
                        url:'https://cnodejs.org/api/v1/topic/' + $state.params.id
                    }).then(function(data){
                        $scope.data=data.data.data
                        console.log($scope.data);
                        $scope.title=$scope.data.title;

                        $scope.content=$scope.data.content;
                        $scope.content=$sce.trustAsHtml($scope.content)
                });

                
                
            })

            controllers.controller('societyCtrl',function($scope){
                 $scope.name='社会';
            })
            controllers.controller('militaryCtrl',function($scope){
                 $scope.name='军事';
            })
   })();