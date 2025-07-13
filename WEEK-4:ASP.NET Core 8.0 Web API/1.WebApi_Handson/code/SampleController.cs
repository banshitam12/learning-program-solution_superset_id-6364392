using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace MyFirstWebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SampleController : ControllerBase
    {
        private static List<string> items = new List<string> { "Item1", "Item2" };

        // GET: api/Sample
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(items);
        }

        // GET: api/Sample/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            if (id < 0 || id >= items.Count)
                return NotFound();
            return Ok(items[id]);
        }

        // POST: api/Sample
        [HttpPost]
        public ActionResult Post([FromBody] string value)
        {
            items.Add(value);
            return CreatedAtAction(nameof(Get), new { id = items.Count - 1 }, value);
        }

        // PUT: api/Sample/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] string value)
        {
            if (id < 0 || id >= items.Count)
                return NotFound();
            items[id] = value;
            return NoContent();
        }

        // DELETE: api/Sample/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            if (id < 0 || id >= items.Count)
                return NotFound();
            items.RemoveAt(id);
            return NoContent();
        }
    }
}


