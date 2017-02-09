angular.module('Hackathon')
    .factory('hackFact', hacktory);

hacktory.$inject = ['$http'];

function hacktory($http) {

    function getThings() {
        return $http.get('/api/things');
    }

    function postThings(thingData) {
        return $http.post('/api/things', thingData);
    }

  
    
    return {
        getThings:    getThings,
        postThings:   postThings,
        
    }
};