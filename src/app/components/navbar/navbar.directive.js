(function() {
  'use strict';

  angular
    .module('app')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope) {

      $scope.openMenu = function() {
        var $menu = angular.element('.menu-wrapper');
        console.log($menu);
        console.log('menu');

        if($menu.hasClass('menu-open')) {
          $menu.removeClass('menu-open');
        }else {
          $menu.addClass('menu-open');
        }
      }

    }
  }

})();
