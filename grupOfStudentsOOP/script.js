class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getAverageMark() {
        let numberOfMarks = this.marks.length;

        return this.getMarksSum() / numberOfMarks;
    }

    getMarksSum() {
        let sumOfMarks = 0;

        for (let i = 0; i < this.marks.length; i++) {
            sumOfMarks += this.marks[i];
        }

        return sumOfMarks;
    }
}

class Group {
    students = [];

    addStudent(student) {
        if (this.isStudent(student)) {
            this.students.push(student);
        }
    }

    isStudent(student) {
        /*if (!(student instanceof Student)) {
			return false;
		}
        return true;*/
        return student instanceof Student;
    }

    getAverageMark() {
        let numberOfMarks = this.students.length;

        return this.getAverageMarksSum() / numberOfMarks;
    }

    getAverageMarksSum() {
        let sumOfAverageMarks = 0;

        for (let i = 0; i < this.students.length; i++) {
            sumOfAverageMarks += this.students[i].getAverageMark();
        }

        return sumOfAverageMarks;
    }
}

const group = new Group();

group.addStudent(new Student("John", [10, 8]));
group.addStudent(new Student("Alex", [10, 9]));
group.addStudent(new Student("Bob", [6, 10]));
group.addStudent({});

console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);
