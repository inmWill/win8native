(function() {
    'use strict';

    angular
        .module('app.logs')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'logs',
                config: {
                    url: '/',
                    templateUrl: 'app/logs/logs.html',
                    controller: 'LogsController',
                    controllerAs: 'vm',
                    title: 'logs',
                    settings: {
                        requireAuth: false,
                        nav: 1,
                        content: '<i class="fa fa-logs"></i> logs'
                    }
                }
            }
        ];
    }
})();
