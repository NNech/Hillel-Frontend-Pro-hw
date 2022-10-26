const STUDENTS = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]


averageStudentMark(13);
averageGroupMark(STUDENTS);


function averageStudentMark(id) {
    let student = STUDENTS.find(student => student.id === id);
    let averageMark = 0;

    for (let i = 0; i < student.marks.length; i++) {
        averageMark += student.marks[i];
    }

    averageMark /= student.marks.length;

    alert(`Student ${student.name} has average mark => ${averageMark}`);

    return averageMark;
}


function averageGroupMark(inputArray) {
    let averageMark = 0;
    let marksAmount = 0;

    for (let i = 0; i < inputArray.length; i++) {
        marksAmount += inputArray[i].marks.length;

        for (let j = 0; j < inputArray[i].marks.length; j++) {
            averageMark += inputArray[i].marks[j];
        }
    }

    averageMark /= marksAmount;

    alert(`Group have average mark => ${averageMark}`);
}
