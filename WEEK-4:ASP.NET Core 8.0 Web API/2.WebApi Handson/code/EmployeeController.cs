using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/Emp")]

public class EmployeeController : ControllerBase
{
    private static List<string> employees = new List<string> { "John Doe", "Jane Smith", "Mike Johnson" };

    [HttpGet]
    public ActionResult<IEnumerable<string>> Get()
    {
        return Ok(employees);
    }

    [HttpGet("{id}")]
    public ActionResult<string> Get(int id)
    {
        if (id < 0 || id >= employees.Count)
            return NotFound();
        return Ok(employees[id]);
    }

    [HttpPost]
    public ActionResult Post([FromBody] string employee)
    {
        employees.Add(employee);
        return CreatedAtAction(nameof(Get), new { id = employees.Count - 1 }, employee);
    }

    [HttpPut("{id}")]
    public ActionResult Put(int id, [FromBody] string employee)
    {
        if (id < 0 || id >= employees.Count)
            return NotFound();
        employees[id] = employee;
        return NoContent();
    }

    [HttpDelete("{id}")]
    public ActionResult Delete(int id)
    {
        if (id < 0 || id >= employees.Count)
            return NotFound();
        employees.RemoveAt(id);
        return NoContent();
    }
}
