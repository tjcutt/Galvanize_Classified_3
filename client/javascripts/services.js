(function() {

  angular
    .module('app')
    .service('classifiedsService', classifiedsService)

  function classifiedsService($http) {
    const BASE_URL = '/api/classifieds'

    this.getAllPosts = function() {
      return $http.get(BASE_URL).then((response) => {
        response.data.forEach((post) => {
          post.created_at = moment(post.created_at);
        });
        return response.data;
      });
    };

    this.getSinglePost = function(postId) {
      return $http.get(`${BASE_URL}/${postId}`).then((response) => {
        return response.data;
      });
    };

    this.createPost = function(newPost) {
      return $http.post(BASE_URL, newPost).then((response) => {
        return response.data;
      });
    };

    this.updatePost = function(post) {
      return $http.patch(`${BASE_URL}/${post.id}`, post).then((response) => {
        return response.data;
      });
    };

    this.deletePost = function(postId) {
      return $http.delete(`${BASE_URL}/${postId}`, postId).then((response) => {
        return response.data;
      });
    };
  }
  classifiedsService.$inject = ["$http"];
})();
