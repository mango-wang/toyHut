/**
 * Created by Willie on 2016-02-29.
 */
'use strict';
define(['filters/filters', 'angular'], function (filters) {
    return filters.filter('formatGroup', [function () {
        return function (group, count) {
            var result = '';
            if (group) {
                var groupName = '';
                var src = angular.copy(group.groups);
                if (count > 0) {
                    src = src.slice(0, count);
                }
                angular.forEach(src, function (g, A) {
                    if (g == src[src.length - 1]) {
                        if (count && group.count > count) {
                            groupName += g.groupName + '...'
                        } else {
                            groupName += g.groupName
                        }
                    } else {
                        groupName += g.groupName + ' | ';
                    }
                });
                result = '在 ' + group.count + ' 个组中  ' + groupName
            }
            return result;
        }
    }]);
});