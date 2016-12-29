// Refer to the angular module and attach a controller named TeacherController
angular.module('SchoolApp')
	// .controller('TeacherController', ['StudentFactory',teacherCtrl]);
	.controller('TeacherController', teacherCtrl);

teacherCtrl.$inject = ['StudentFactory'];
function teacherCtrl(StudentFactory) {
	// the value of StudentFactory is EXACTLY what you returned from the factory
	// console.log('StudentFactory loaded', StudentFactory);

	var teachers = this;
	teachers.greeting = 'Hello Class!';

// make an http request to the server to get some data from the database and return it
	teachers.data = [{
			name: 'Darwin',
			teaches: 'JS101',
			salary: 1500
		},
		{
			name: 'Cupernicus',
			teaches: 'RU100',
			salary: 5000
		},
		{
			name: 'Newton',
			teaches: 'CS102',
			salary: 2500
		}];

	// give the school data a name through the teachers controller
	teachers.school = StudentFactory.schoolData;
	teachers.students = StudentFactory.studentData;  // teacherController has access to student data

	// create a function to find advisees for the teacherController
	teachers.getAdvisees = function (teacher) {
		var advisees = [];
		teachers.students.forEach(function (student, index, students) {
			if (student.advisor === teacher.name) {
				advisees.push(student);
			};
		});
		return advisees;
	};	

}
