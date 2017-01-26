
// MODEL
var Users = [{
    name: "Billy Bob", // String
    age: 30, // Integer,
    email: 'billybobbery@email.com',
    createdAt: 14598756847 // Integer
}, {
    name: "Jimmy John", // String
    age: 50, // Integer
    email: 'jimmyjohnery@email.com', // String
    createdAt: 14598756847 // Integer
}, {
    name: "Mary Sue", // String
    age: 34, // Integer
    email: 'marysue@email.com', // String
    createdAt: 14598756847 // Integer
}, {
    name: "Ellie May", // String
    age: 15, // Integer
    email: 'elliemay@email.com', // String
    createdAt: 14598756847 // Integer
}];

module.exports = {
    UsersfindAll: function () {
        return Users;
    },
    UsersfindOne: function (index) {
        return Users[index];
    }
}
