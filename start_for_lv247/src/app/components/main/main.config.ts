mainRoutes.$inject = ['$stateProvider'];

export function mainRoutes($stateProvider: any) {
    $stateProvider.state('main', {
        url: '/',
        component: 'main'
    });
}
