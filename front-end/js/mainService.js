angular.module('userProfiles').service('mainService', function ($http) {

    this.getUser = () => {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/users'
        })
    }
    this.toggleFavorite = index => {
        data[index].isFavorite = !data[index].isFavorite;
    }
    this.firstLetterCaps = str => {
        return str.charAt(0).toUpperCase() + str.substr(1);
    }
});