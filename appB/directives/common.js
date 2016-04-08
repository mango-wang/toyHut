define(['directives/directives'], function (directives) {
    'use strict';

    /*
     text Number
     */
    directives.directive('textBoxNumber', [function () {
        return {
            require: 'ngModel',
            template: "<input type='text' ng-model='model' ng-blur='ngEventBlur()'/>",
            restrict: 'E',
            scope: {
                forClass: '@',
                model: '=ngModel',
                max: '=',
                min: '@',
                ngEventBlur: '&ngEventBlur',
                ngError: '=',
                errorMsg: '=',
                decimalPoint: '@',
                maxkey: '@'
            },
            link: function ($scope, element, attrs) {
                var input = element.find('input');
                var showError = true;
                $scope.$watch('model', function (newValue, oldValue) {
                    if (newValue) {
                        if (isNaN(newValue)) {
                            $scope.model = oldValue;
                            return;
                        }
                        if ($scope.max) {
                            if (Number(newValue) > Number($scope.max)) {

                                if ($scope.errorMsg && $scope.errorMsg.max) {
                                    $scope.ngError = $scope.errorMsg.max;
                                    showError = true;
                                } else {
                                    $scope.model = '';
                                }
                                return;
                            }
                        }

                        if ($scope.min) {
                            if (Number(newValue) < Number($scope.min)) {
                                $scope.model = '';
                                return;
                            }
                        }

                        if (!($scope.decimalPoint == 'true') && newValue.toString().indexOf('.') > -1) {
                            $scope.model = oldValue;
                            return;
                        }
                        if (!showError) {
                            $scope.ngError = '';
                        } else {
                            showError = false;
                        }

                    }
                })
                if (attrs.forClass) {
                    input.addClass(attrs.forClass);
                }

            }
        }
    }]);

});