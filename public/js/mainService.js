angular.module('userProfiles').service('mainService', function ($http) {

    this.getUser = () => {
        return $http({
            method: 'GET',
            url: 'http://localhost:3000/users'
        })
    }
    this.toggleFavorite = (index,users) => {
        users[index].isFavorite = !users[index].isFavorite;
    }
    this.firstLetterCaps = str => {
        return str.charAt(0).toUpperCase() + str.substr(1);
    }
});