import { routes } from './app-routing.module';

fdescribe('AppRoutingModule', () => {

    it('should have an empty path', () => {
        expect(routes[0].path).toBe('');
    });

    it('should have a login path', () => {
        expect(routes[1].path).toBe('login');
    });

    it('should have a dashboard path', () => {
        expect(routes[2].path).toBe('dashboard');
    });

});
