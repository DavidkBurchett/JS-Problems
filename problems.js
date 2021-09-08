const students = [

    { name: 'Quincy', grade: 96 },
  
    { name: 'Jason', grade: 84 },
  
    { name: 'Alexis', grade: 100 },
  
    { name: 'Sam', grade: 65 },
  
    { name: 'Katie', grade: 90 }
  
  ];

const studentNames = students.map(student => {
    return { name: student.name}
})
const lowercaseStudentNames = students.map(student => {
    return { name: student.name.toLowerCase()}
})

console.log(studentNames);
console.log(lowercaseStudentNames);
console.log("---------------------------------")

const studentGrades = students.map(student => {
    return { grade: student.grade}
})

console.log(studentGrades);
console.log("---------------------------------")

const below90 = students.filter(student => {
    return student.grade < 90
})

console.log(below90)
console.log("---------------------------------")

const studentNamesAbove90 = students.filter(student => {
    return student.grade > 90
}).map(student => {
    return student.name
})

console.log(studentNamesAbove90)
console.log("---------------------------------")

const averageGrade = students.reduce((acc, element) => {
    return ((element.grade + acc) / students.length)
},0);

console.log(averageGrade)
console.log("---------------------------------")

const studentsobject = students.reduce((acc, element) => {
    acc[element.name]=element.grade;
    return acc
},{});

console.log(studentsobject);
console.log("---------------------------------")