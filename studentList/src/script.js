const ADD_STUDENT_SELECTOR = "#addStudent";
const BTN_ADD_STUDENT = "#btnAddStudent";
const BTN_DELETE_STUDENT = ".deleteBtn";
const STUDENTS_SELECTOR = "#studentList";
const NEW_STUDENT_SELECTOR = ".newStudent";
const MARK_INPUT_CLASS = ".mark";
const INPUT = "input";

const $studentsContainer = $(STUDENTS_SELECTOR);
const $addStudentSelector = $(ADD_STUDENT_SELECTOR);

$(ADD_STUDENT_SELECTOR).on("click", BTN_ADD_STUDENT, onBtnAddStudentClick);

$(STUDENTS_SELECTOR)
    .on("click", BTN_DELETE_STUDENT, onBtnDeleteStudentClick)
    .on("focusout", MARK_INPUT_CLASS, onStudentListClick);

getStudentsList();

function onBtnAddStudentClick(e) {
    addStudent(e.target);

    cleanInputField();
}

function onStudentListClick(e) {
    const student = e.target.closest(NEW_STUDENT_SELECTOR);
    const studentMarks = e.target
        .closest(NEW_STUDENT_SELECTOR)
        .querySelectorAll(INPUT);

    let id = student.dataset.id;
    const marksArr = getInputsData(studentMarks);

    const changes = {
        marks: marksArr,
    };

    if (id) {
        updateStudent(id, changes);
    }
}

function getInputsData(inputs) {
    let inputsData = [];

    for (const input of inputs) {
        inputsData.push(input.value);
    }

    return inputsData;
}

function updateStudent(id, changes) {
    StudentApi.update(id, changes)
        .then((students) => getStudentsList(students))
        .catch(showError);
}

function onBtnDeleteStudentClick(e) {
    const student = e.target.closest(NEW_STUDENT_SELECTOR);
    let id = student.dataset.id;

    if (id) {
        deleteStudent(id);
        student.remove();
    }
}

function deleteStudent(studentId) {
    StudentApi.delete(studentId).catch(showError);
}

function addStudent() {
    const student = getInputFieldValue();

    if (isEmptyStrValidation(student.name)) {
        return;
    }

    createStudent(student);
}

function isEmptyStrValidation(input) {
    if (input == "") {
        alert("Incorrent student name!");
        return true;
    }

    return false;
}

function getInputFieldValue() {
    return {
        name: inputStudentName.value,
    };
}

function createStudent(newStudent) {
    StudentApi.create(newStudent)
        .then((newStudent) => renderStudent(newStudent))
        .catch(showError);
}

function renderStudent(student) {
    const $html = generateStudentHTML(student);

    $studentsContainer.append($html);
}

function getStudentsList() {
    StudentApi.getStudents()
        .then((studentsList) => {
            renderStudentsList(studentsList);
        })
        .catch(showError);
}

function renderStudentsList(studentsList) {
    $studentsContainer.html(studentsList.map(generateStudentHTML));
}

function generateStudentHTML(student) {
    return `<tr class ="newStudent" data-id="${student.id}">
				<td>${student.name}</td>
					<td>
					<input class="mark" value=${student.marks[0]} type="text"/>
					</td>
					<td>
					<input class="mark" value=${student.marks[1]} type="text"/>
					</td>
					<td>
					<input class="mark" value=${student.marks[2]} type="text"/>
					</td>
					<td>
					<input class="mark" value=${student.marks[3]} type="text"/>
					</td>
					<td>
					<input class="mark" value=${student.marks[4]} type="text"/>
					</td>
					<td>
					<input class="mark" value=${student.marks[5]} type="text"/>
					</td>
					<td>
					<input class="mark" value=${student.marks[6]} type="text"/>
					</td>
					<td>
					<input class="mark" value=${student.marks[7]} type="text"/>
					</td>
					<td>
					<input class="mark" value=${student.marks[8]} type="text"/>
					</td>
					<td>
					<input class="mark" value=${student.marks[9]} type="text"/>
					</td>

					<td>
						<button class="deleteBtn">Delete</button>
					</td>
					
            </tr>`;
}

function cleanInputField() {
    inputStudentName.value = "";
}

function showError(error) {
    alert(error.message);
}
