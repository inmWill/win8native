(function() {
    'use strict';

    angular
        .module('app.system')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'system',
                config: {
                    url: '/',
                    templateUrl: 'app/system/system.html',
                    controller: 'SystemController',
                    controllerAs: 'vm',
                    title: 'system',
                    settings: {
                        requireAuth: false,
                        nav: 1,
                        content: '<i class="fa fa-system"></i> system'
                    }
                }
            }
        ];
    }
})();
