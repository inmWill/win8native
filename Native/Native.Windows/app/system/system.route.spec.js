/* jshint -W117, -W030 */
describe('system routes', function () {
    describe('state', function () {
        var view = 'app/system/system.html';

        beforeEach(function() {
            module('app.system', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state system to url / ', function() {
            expect($state.href('system', {})).to.equal('/');
        });

        it('should map /system route to system View template', function () {
            expect($state.get('system').templateUrl).to.equal(view);
        });

        it('of system should work with $state.go', function () {
            $state.go('system');
            $rootScope.$apply();
            expect($state.is('system'));
        });
    });
});
