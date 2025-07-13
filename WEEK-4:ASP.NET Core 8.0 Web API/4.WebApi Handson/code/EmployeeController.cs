using AdvancedWebAPIProject.Filters;
using AdvancedWebAPIProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AdvancedWebAPIProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [CustomAuthFilter] // Apply custom authorization filter
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> employees = GetStandardEmployeeList();

        // Private method to create sample data
        private static List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
            {
                new Employee
                {
                    Id = 1,
                    Name = "John Doe",
                    Salary = 50000,
                    Permanent = true,
                    Department = new Department { Id = 1, Name = "IT" },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 1, Name = "C#", Level = "Advanced" },
                        new Skill { Id = 2, Name = "ASP.NET", Level = "Intermediate" }
                    },
                    DateOfBirth = new DateTime(1990, 1, 15)
                },
                new Employee
                {
                    Id = 2,
                    Name = "Jane Smith",
                    Salary = 60000,
                    Permanent = false,
                    Department = new Department { Id = 2, Name = "HR" },
                    Skills = new List<Skill>
                    {
                        new Skill { Id = 3, Name = "Communication", Level = "Expert" }
                    },
                    DateOfBirth = new DateTime(1985, 5, 20)
                }
            };
        }

        // GET: api/Employee
        [HttpGet]
        [AllowAnonymous] // This endpoint allows anonymous access
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> Get()
        {
            // Exception testing completed - normal operation restored
            // throw new Exception("Test exception for custom filter");

            return Ok(employees);
        }

        // GET: api/Employee/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<Employee> Get(int id)
        {
            var employee = employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
                return NotFound();
            return Ok(employee);
        }

        // POST: api/Employee
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<Employee> Post([FromBody] Employee employee)
        {
            if (employee == null)
                return BadRequest("Employee data is required");

            // Enhanced ID assignment to handle empty lists
            if (!employees.Any())
            {
                employee.Id = 1;
            }
            else
            {
                employee.Id = employees.Max(e => e.Id) + 1;
            }

            employees.Add(employee);
            return CreatedAtAction(nameof(Get), new { id = employee.Id }, employee);
        }

        // PUT: api/Employee/5 - Enhanced according to assignment requirements
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<Employee> Put(int id, [FromBody] Employee employee)
        {
            // Check if id is less than or equal to 0
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            // Check if employee data is provided
            if (employee == null)
            {
                return BadRequest("Employee data is required");
            }

            // Check if the id in URL matches the id in the employee object
            if (id != employee.Id)
            {
                return BadRequest("Employee ID in URL must match ID in request body");
            }

            // Find the existing employee
            var existingEmployee = employees.FirstOrDefault(e => e.Id == id);
            if (existingEmployee == null)
            {
                // Assignment requirement: same error message for non-existent employees
                return BadRequest("Invalid employee id");
            }

            // Update the employee in the hardcoded list
            var index = employees.IndexOf(existingEmployee);
            employees[index] = employee;

            // Return the updated employee data as per assignment requirement
            return Ok(employee);
        }

        // DELETE: api/Employee/5
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult Delete(int id)
        {
            var employee = employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
                return NotFound();

            employees.Remove(employee);
            return NoContent();
        }

        // Custom action method
        [HttpGet("standard")]
        [AllowAnonymous] // This endpoint allows anonymous access
        public ActionResult<List<Employee>> GetStandard()
        {
            return Ok(GetStandardEmployeeList());
        }
    }
}






