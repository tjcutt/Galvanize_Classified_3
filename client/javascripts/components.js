(function() {

  angular
    .module('app')
    .component('navbar', {
      controller: 'navbarController',
      controllerAs: '$ctrl',
      templateUrl: '/views/navbar.html'
    })

    .component('posts', {
      controller: 'postsController',
      controllerAs: '$ctrl',
      templateUrl: '/views/posts.html'
    })

    .component('sortFilter', {
      bindings: {
        'sortCriterion': '=',
        'sortCriteria': '=',
        'filter': '='
      },
      controller: 'sortFilterController',
      controllerAs: '$ctrl',
      templateUrl: '/views/sortFilter.html'
    })

    .component('post', {
      bindings: {
        'post': '=',
        'posts': '='
      },
      controller: 'postController',
      controllerAs: '$ctrl',
      templateUrl: '/views/post.html'
    })

    .component('newPost', {
      bindings: {
        'posts': '=',
        'displayForm': '='
      },
      controller: 'newPostController',
      controllerAs: '$ctrl',
      templateUrl: '/views/newPost.html'
    })

    .component('editPost', {
      bindings: {
        'posts': '=',
        'post': '='
      },
      controller: 'editPostController',
      controllerAs: '$ctrl',
      templateUrl: '/views/editPost.html'
    })

})();
