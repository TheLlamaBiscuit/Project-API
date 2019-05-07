# BaseAPI

This is for the employee table.

Description: Get all Employees from the database
Endpoint: http://localhost:3002/api/v1/get-all-employee
Method: GET
Params: none
Request Payload: none
Response:
{
ID: 1
        	First_Name: Claire
        	Last_Name: Cheer
        	Emp_Type: Admin
Emp_URL: _------
},{
ID: 2
        	First_Name: Joe
        	Last_Name: Dirt
        	Emp_Type: Admin
Emp_URL: _------
}
_________________________________
 
Description: Get an employee by its ID from the database
Endpoint: http://localhost:3002/api/v1/employee/get-employee-by-id/:id
Method: GET
Params: id - the employee id
Request Payload: none
Response:
{
        	ID: 2
        	First_Name: Joe
        	Last_Name: Dirt
        	Emp_Type: Admin
Emp_URL: _------
}
_________________________________
 
Description: Create a new employee record
Endpoint: http://localhost:3002/api/v1/createEmployee
Method: POST
Params: none
Request Payload:
{
        	ID: 2
        	First_Name: Joe
        	Last_Name: Dirt
        	Emp_Type: Admin
Emp_URL: _------
}
Response:
{
ID: 2
        	First_Name: Joe
        	Last_Name: Dirt
        	Emp_Type: Admin
Emp_URL: _------
}
 
_________________________________
 
Description: Update an employee record
Endpoint: http://localhost:3002/api/v1/update-Employee/id/:id
Method: PUT
Params: id - the id of the employee
Request Payload:
{
        	ID: 2
        	First_Name: Joe
        	Last_Name: Dirt
        	Emp_Type: Admin
Emp_URL: _------
}
Response:
{
ID: 2
        	First_Name: Joe
        	Last_Name: Dirt
        	Emp_Type: CEO
Emp_URL: _------
}
_________________________________
 
Description: Delete an employee record
Endpoint: http://localhost:3002/api/v1/delete/id/:id
Method: DELETE
Params: id - The id of the employee
Request Payload: None
Response:
{
        	ID: 2
        	First_Name: Joe
        	Last_Name: Dirt
        	Emp_Type: Admin
Emp_URL: _------
}

https://docs.google.com/document/d/1WXoiOR8kFofyR2r_1HHnfwNfii1CBOWnpDi44kFh8Ew/edit?usp=sharing