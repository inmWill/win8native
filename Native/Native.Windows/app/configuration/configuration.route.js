(function() {
    'use strict';

    angular
        .module('app.configuration')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'configuration',
                config: {
                    url: '/',
                    templateUrl: 'app/configuration/configuration.html',
                    controller: 'ConfigurationController',
                    controllerAs: 'vm',
                    title: 'configuration',
                    settings: {
                        requireAuth: false,
                        nav: 1,
                        content: '<i class="fa fa-configuration"></i> configuration'
                    }
                }
            }
        ];
    }
})();
