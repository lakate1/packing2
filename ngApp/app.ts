namespace myapp {

    angular.module('myapp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/ngApp/views/home.html',
                controller: myapp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('edit', {
                url: '/edit-list/:id',
                templateUrl: '/ngApp/views/editlist.html',
                controller: myapp.Controllers.EditMovieController,
                controllerAs: 'vm'
            })
            .state('add', {
                url: '/add-list',
                templateUrl: '/ngApp/views/addList.html',
                controller: myapp.Controllers.AddMovieController,
                controllerAs: 'vm'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: myapp.Controllers.RegisterController,
                controllerAs: 'vm'

            })
            .state('login', {
                url: '/',
                templateUrl: '/ngApp/views/login.html',
                controller: myapp.Controllers.LoginController,
                controllerAs: 'vm'


            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
