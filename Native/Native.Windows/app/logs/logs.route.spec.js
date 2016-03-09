/* jshint -W117, -W030 */
describe('logs routes', function () {
    describe('state', function () {
        var view = 'app/logs/logs.html';

        beforeEach(function() {
            module('app.logs', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state logs to url / ', function() {
            expect($state.href('logs', {})).to.equal('/');
        });

        it('should map /logs route to logs View template', function () {
            expect($state.get('logs').templateUrl).to.equal(view);
        });

        it('of logs should work with $state.go', function () {
            $state.go('logs');
            $rootScope.$apply();
            expect($state.is('logs'));
        });
    });
});
