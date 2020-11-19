const students = [
    {
        name: 'Grace',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 9
    },
    {
        name: 'Paul',
        grade: 5
    },
];
function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos Aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:')
console.log(students);