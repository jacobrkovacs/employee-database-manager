INSERT INTO department (department_name)
VALUES ("Customer Service"),
       ("Sales"),
       ("Research and Development"),
       ("Legal"),
       ("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("Help Desk", 50000, 1),
       ("Live Chat Rep", 50000, 1),
       ("Junior Sales Rep", 70000, 2),
       ("Senior Sales Rep", 80000, 2),
       ("Researcher", 80000, 3),
       ("Developer", 80000, 3),
       ("In-house Council", 85000, 4),
       ("Contracts", 75000, 4),
       ("Accountant", 75000, 5),
       ("Payroll", 70000, 5);

INSERT INTO employee (fname, lname, role_id, manager_id)
VALUES ("Jacob", "Kovacs", 3, null)
VALUES ("Bruce", "Wayne", 3, 1)
VALUES ("Clark", "Kent", 3, 1)