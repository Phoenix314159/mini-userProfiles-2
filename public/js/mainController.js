angular.module('userProfiles').controller('mainController', function ($scope, mainService) {

    $scope.getUsers = (() => {
        mainService.getUser().then(result => {

            $scope.users = result.data;
        });
    })();

    $scope.toggleFavorite = mainService.toggleFavorite;

    $scope.firstLetterCaps = (a) => {
        return mainService.firstLetterCaps(a);
    }

})
