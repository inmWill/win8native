(function () {
    'use strict';

    angular
        .module('app.configuration')
        .controller('ConfigurationController', ConfigurationController);

    ConfigurationController.$inject = ['logger'];
    /* @ngInject */
    function ConfigurationController(logger) {
        var vm = this;
        vm.title = 'Configuration';

        activate();

        function activate() {
                logger.info('Activated Configuration View');
        }

    }
})();
