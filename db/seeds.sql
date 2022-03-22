INSERT INTO department (department_name)
VALUES
('Admin'),
('Grocery'),
('Produce'),
('Meat');

INSERT INTO r0le (title, salary, department_id)
VALUES
('Store Manager', 70000, 1),
('Asst to Store Manager', 40000, 1),
('Grocery Manager', 28000, 2),
('Grocery Clerk', 24000, 2),
('Produce Manager', 28000, 3)
('Produce Stocker', 24000, 3),
('Butcher', 20000, 4),
('Asst to Butcher', 28000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Roy', 'Mustang', 1, 1),
('Riza', 'Hawkeye', 2, 1),
('Edward', 'Elric', 3, 1),
('Alphonse', 'Elric', 3, 1),
('Winry', 'Rockbell', 4, null),
('Pinako', 'Rockbell', 4, null),
('Ling', 'Yao', 5, 1),
('Lan', 'Fan', 6, null),
('Maes', 'Hughes', 7, 1),
('Nina', 'Tucker', 8, null);


