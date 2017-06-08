(function() {

  angular
    .module('app')
    .controller('navbarController', navbarController)
    .controller('postsController', postsController)
    .controller('sortFilterController', sortFilterController)
    .controller('postController', postController)
    .controller('newPostController', newPostController)
    .controller('editPostController', editPostController)

  function navbarController() {
    const vm = this;
  }

  function postsController(classifiedsService) {
    const vm = this;

    vm.$onInit = function() {
      classifiedsService.getAllPosts().then(function(res) {
        vm.posts = res;
      })
    }

    vm.toggleForm = function() {
      vm.displayForm = !vm.displayForm;
    }

    vm.sortCriteria = [{
      category: 'Price Low to High',
      property: 'price'
    },
    {
      category: 'Price High to Low',
      property: '-price'
    },
    {
      category: 'Newest',
      property: '-created_at'
    },
    {
      category: 'Oldest',
      property: 'created_at'
    }]

    vm.sortCriterion = vm.sortCriteria[1]
  }

  postsController.$inject = ['classifiedsService'];

  function postController(classifiedsService, $state) {
    const vm = this;

    vm.deletePost = function() {
      classifiedsService.deletePost(vm.post.id).then((res) => {
        let postId = vm.post.id;
        let postIndex = vm.posts.indexOf(vm.post);
        vm.posts.splice(postIndex);
      })
    }
  }

  postController.$inject = ['classifiedsService', '$state'];

  function newPostController(classifiedsService) {
    const vm = this;

    vm.createPost = function() {
      classifiedsService.createPost(vm.newPost).then((res) => {
        vm.posts.push(res);
        delete vm.newPost;
      })
    }
  }

  newPostController.$inject = ['classifiedsService'];

  function editPostController(classifiedsService, $stateParams, $state) {
    const vm = this;

    vm.$onInit = function() {
      console.log('edit post working');
      classifiedsService.getSinglePost($stateParams.post_id).then((res) => {

          vm.editedPost = res
          console.log('edit res', res)

      })
    }

    vm.updatePost = function() {
      classifiedsService.updatePost(vm.editedPost).then((res) => {
        console.log('working?')
        $state.go('main');
      });
    };
  }

  editPostController.$inject = ['classifiedsService', '$stateParams', '$state'];

  function sortFilterController() {
    const vm = this;
  }
})();
