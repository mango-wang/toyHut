/**
 * Created by mango on 2016/4/28.
 */
define([
    './controllers', 'angular'], function (controllers, angular) {
    controllers.
    controller('vipList', [
        '$rootScope',
        '$scope',
        '$route',
        '$timeout',
        'vipService',
        '$filter',
        function ($rootScope, $scope, $route, $timeout, vipService, $filter) {

            var vipList = {
                init: function () {
                    var $this = this;
                    $scope.vipList = [];
                    $scope.search = function () {
                        $this.getGridData();
                    }
                    $scope.paginationConf = {
                        currentPage: 1,
                        totalItems: 10,
                        itemsPerPage: 30,
                        pagesLength: 10,
                        perPageOptions: [10, 20, 30, 40, 50],
                        rememberPerPage: 'perPageItems',
                        isExe: false,
                        onChange: function () {
                            if (this.currentPage > 1) {
                                this.isExe = true;
                            }
                            if (this.isExe) {

                                $this.getGridData();
                            }
                        }
                    };
                    $scope.options = {
                        opens: 'right',
                        singleDatePicker: false,
                        format: 'YYYY-MM-DD',
                        isEmpty: true
                    };
                    function AddDays(date,value)
                    {
                        date.setDate(date.getDate()+value);
                        return date;
                    }


                    $scope.concernedDate ={
                        startDate:AddDays(new Date(),-7),
                        endDate: new Date()
                    }
                    $this.getGridData();


                },
                parameter: function () {
                    var dateFilter = $filter('date');
                    return {
                        keyWord: $scope.keyWord,
                        startDate: dateFilter($scope.concernedDate.startDate,'yyyy-MM-dd'),
                        endDate: dateFilter( $scope.concernedDate.endDate,'yyyy-MM-dd'),
                        start: ($scope.paginationConf.currentPage - 1) * $scope.paginationConf.itemsPerPage,
                        num: $scope.paginationConf.itemsPerPage
                    }

                },
                statistics:function(){




                }
                , getGridData: function () {
                    var _this = this;
                    var info = this.parameter();
                    vipService.getList(info, function (result) {
                        if (result['result'] == 0) {
                            $scope.vipList = _this.conversion(result['content']['items']);
                            $scope.paginationConf.totalItems = result['content']['total'];
                        }
                    });
                }, conversion: function (data) {
                    if (angular.isArray(data)) {
                        var dateFilter = $filter('date');
                        angular.forEach(data, function (item) {
                            item.createTime = dateFilter(new Date(item.createTime), 'yyyy-MM-dd');
                        })

                    }
                    return data;

                }
            }

            vipList.init();
        }])
});