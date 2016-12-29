// Refer to the angular module and attach a controller named StudentController
angular.module('SchoolApp')
	.controller('StudentController', studentCtrl);

studentCtrl.$inject = ['StudentFactory'];
function studentCtrl(StudentFactory) {
	var students = this;
	students.greeting = 'Yo!';

	students.data = StudentFactory.studentData;
	students.school = StudentFactory.schoolData;
	students.passing = true;

	// create a custom filter for the students based on grade point average
	students.grade = 'pass';
	students.gradeFilter = function(element, index, array) {
		if (students.grade === 'pass') {
			return element.gpa >=2;
		} else if (students.grade === 'fail') {
			return element.gpa < 2;
		} else {
			return true;
		};
	};
};