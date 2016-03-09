(function () {
    'use strict';

    angular
        .module('app.system')
        .controller('SystemController', SystemController);

    SystemController.$inject = ['logger'];
    /* @ngInject */
    function SystemController(logger) {
        var vm = this;
        vm.title = 'System Information';

        activate();

        function activate() {
                logger.info('Activated System View');
        }

    }
})();
