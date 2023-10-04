interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};
  
const student2: Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

(function () {
const table = document.createElement('table');
const tableHead = document.createElement('tr');
const cell1 = document.createElement('th');
const cell2 = document.createElement('th');
const cell3 = document.createElement('th');
const cell4 = document.createElement('th');
cell1.textContent = 'First Name';
cell2.textContent = 'Last Name';
cell3.textContent = 'Age';
cell4.textContent = 'Location';

tableHead.appendChild(cell1);
tableHead.appendChild(cell2);
tableHead.appendChild(cell3);
tableHead.appendChild(cell4);

table.appendChild(tableHead);

for (const obj of studentsList) {
    const row = document.createElement('tr');
    cell1.textContent = obj.firstName;
    cell2.textContent = obj.lastName;
    cell3.textContent = obj.age.toString();
    cell4.textContent = obj.location;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);

    table.appendChild(row);
}

}());
