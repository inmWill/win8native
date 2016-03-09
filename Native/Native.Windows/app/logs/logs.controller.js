(function () {
    'use strict';

    angular
        .module('app.logs')
        .controller('LogsController', LogsController);

    LogsController.$inject = ['logger'];
    /* @ngInject */
    function LogsController(logger) {
        var vm = this;
        vm.title = 'Logs';

        activate();

        function activate() {
                logger.info('Activated Logs View');
        }

    }
})();
