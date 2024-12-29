const users = {
			Alex: {
				email: 'alex@alex.com',
				skills: ['HTML', 'CSS', 'JavaScript'],
				age: 20,
				isLoggedIn: false,
				points: 30
			},
			Asab: {
				email: 'asab@asab.com',
				skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
				age: 25,
				isLoggedIn: false,
				points: 50
			},
			Brook: {
				email: 'daniel@daniel.com',
				skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
				age: 30,
				isLoggedIn: true,
				points: 50
			},
			Daniel: {
				email: 'daniel@alex.com',
				skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
				age: 20,
				isLoggedIn: false,
				points: 40
			},
			John: {
				email: 'john@john.com',
				skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
				age: 20,
				isLoggedIn: true,
				points: 50
			},
			Thomas: {
				email: 'thomas@thomas.com',
				skills: ['HTML', 'CSS', 'JavaScript', 'React'],
				age: 20,
				isLoggedIn: false,
				points: 40
			},
			Paul: {
				email: 'paul@paul.com',
				skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
				age: 20,
				isLoggedIn: false,
				points: 40
			}
		}
		
//---------------------------------------------------------------
		
	const studentStreams = [
				{name: 'James',
					stream: "Data Analytics",
					courses_completed: [{code: 'CSIS1175', grade: 'A+', value: 4.33},
						{code: 'CSIS1280', grade: 'B+', value: 3.33},
						{code: 'CSIS1275', grade: 'A', value: 4}]
				},
				{name: 'Amandeep',
					stream: "Emerging Technology",
					courses_completed: [{code: 'CSIS1175', grade: 'A', value: 4},
						{code: 'CSIS1275', grade: 'B+', value: 3.33},
						{code: 'CSIS2200', grade: 'B', value: 3},
						{code: 'CSIS2260', grade: 'B', value: 3}]
				},
				{name: 'Amanda',
					stream: "Data Analytics",
					courses_completed: [{code: 'CSIS1175', grade: 'B', value: 3},
						{code: 'CSIS1280', grade: 'A', value: 4},
						{code: 'CSIS1275', grade: 'B', value: 3}]
				},
				{name: 'Kim',
					stream: "Emerging Technology",
					courses_completed: [{code: 'CSIS1175', grade: 'A+', value: 4.33},
						{code: 'CSIS1275', grade: 'A', value: 4},
						{code: 'CSIS2200', grade: 'B', value: 3},
						{code: 'CSIS2270', grade: 'B+', value: 3.33}]
				},
				{name: 'Nicole',
					stream: "Data Analytics",
					courses_completed: [{code: 'CSIS1175', grade: 'B', value: 3},
						{code: 'CSIS1275', grade: 'C', value: 2},
						{code: 'CSIS2300', grade: 'B+', value: 3.33}]
				}
			];
		
		
//for each student, compute GPA based on the courses completed
//thereafter, display that have a gpa of at least 3.5

//object modification
//function to compute grade (arraow function)
//add each grade point to running total (i.e, curTotal)
function gradeTotal(curTotal, course){
	return (curTotal + course.value);
}

//define functuion to modify student information
function modifyStudentInfo(students){
	//llop through student objects
	for (student of students) {
		//get an array of courses completed
		let arrCourses = student.courses_completed;
		
		//initialize gpa
		let gpa=0;
		
		//get total gradepoints
		let total = arrCourses.reduce(gradeTotal,0)
		
		//append gpa property to student object (formatted to 2 decimal places)
		student['gpa'] = (total/arrCourses.length).toFixed(2)
		
		//thereafter, display students that have a gpa of at least 3.5
		if (student.gpa >=3.5) {
			console.log(student);
		}
	}
}

//call the function
modifyStudentInfo(studentStreams);






