// Refer to the angular module and attach a factory named SchoolFactory
angular.module('SchoolApp')
    .factory('StudentFactory', studentFactory);

function studentFactory() {

    var studentProfiles = [
        {
            name: 'Flynn',
            gpa: 1.5,
            startDate: new Date(2015, 01, 01),
            courses: ['Environmental Affairs', 'Philosophy', 'Midwifery'],
            advisor: 'Darwin'
        },
        {
            name: 'Mr Rogers',
            gpa: 3.0,
            startDate: new Date(2001, 03, 02),
            courses: ['Train Engineering'],
            advisor: 'Newton'
        },
        {
            name: 'McMan',
            gpa: 4.0,
            startDate: new Date(2021, 03, 02),
            courses: ['Aerospace', 'Space space', 'Animal Husbandry', "Animation"],
            advisor: 'Newton'
        },
        {
            name: 'Mr Bean',
            gpa: 0.5,
            startDate: new Date(2015, 03, 02),
            courses: ['Mime', 'Acting', 'Super Spy'],
            advisor: 'Cupernicus'
        },
        {
            name: 'Kurt',
            gpa: 2.1,
            startDate: new Date(2010, 06, 01),
            courses: ['Basket Weaving', 'Sidekick 101', 'Volleyball'],
            advisor: 'Cupernicus'
        }
    ]

	var gpaThreshold = 0;
    var gpaOver = function (student, index) {
        return student.gpa > gpaThreshold;
    };

    var schoolInfo = {
        name: 'Teaching U',
        address: '123 Main St'
    };

    // Factories REQUIRE a return statement
    // Whatever you RETURN, is EXACTLY what you get access to in your controllers
    // 99% of the time, your Factories will return OBJECTS

    // Exporting data on an OBJECT will make your life much easier.  If you're always expecting the factory to be an object, you can add/remove properties from the object WITHOUT having to change code you've already written (for the most part)

    // return studentProfiles //Array
    // VS
    // return {         //Object
    //      studentData : studentProfiles,
    //      schoolData : schoolInfo
    //}

    // the ONLY information you can get out of a factory is what you RETURN
    return {
        studentData: studentProfiles,
        gpaThreshold: gpaThreshold,
        gpaOver: gpaOver,
        schoolData: schoolInfo
    };
}