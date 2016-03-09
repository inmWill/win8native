/* jshint -W117, -W030 */
describe('configuration routes', function () {
    describe('state', function () {
        var view = 'app/configuration/configuration.html';

        beforeEach(function() {
            module('app.configuration', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state configuration to url / ', function() {
            expect($state.href('configuration', {})).to.equal('/');
        });

        it('should map /configuration route to configuration View template', function () {
            expect($state.get('configuration').templateUrl).to.equal(view);
        });

        it('of configuration should work with $state.go', function () {
            $state.go('configuration');
            $rootScope.$apply();
            expect($state.is('configuration'));
        });
    });
});
