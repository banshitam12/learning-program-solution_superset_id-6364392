using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AdvancedWebAPIProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [AllowAnonymous] // Allow anonymous access to generate tokens
    public class AuthController : ControllerBase
    {
        // Fixed security key - must be at least 32 characters (256 bits) for HS256
        private const string SecurityKey = "mysuperdupersecretkeythatisatleast32characters";

        // GET: api/Auth/token
        [HttpGet("token")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<object> GetToken()
        {
            // Generate JWT token with Admin role
            var token = GenerateJSONWebToken(1, "Admin");

            return Ok(new
            {
                token = token,
                message = "JWT token generated successfully",
                expiresIn = "10 minutes",
                role = "Admin"
            });
        }

        // GET: api/Auth/token-poc
        [HttpGet("token-poc")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<object> GetTokenPOC()
        {
            // Generate JWT token with POC role for testing
            var token = GenerateJSONWebToken(2, "POC");

            return Ok(new
            {
                token = token,
                message = "JWT token with POC role generated successfully",
                expiresIn = "10 minutes",
                role = "POC"
            });
        }

        // GET: api/Auth/token-short
        [HttpGet("token-short")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<object> GetTokenShort()
        {
            // Generate JWT token with 2-minute expiration for testing
            var token = GenerateJSONWebTokenShort(1, "Admin");

            return Ok(new
            {
                token = token,
                message = "JWT token with 2-minute expiration generated",
                expiresIn = "2 minutes",
                role = "Admin"
            });
        }

        // Private method to generate JWT token with 10-minute expiration
        private string GenerateJSONWebToken(int userId, string userRole)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecurityKey));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Role, userRole),
                new Claim("UserId", userId.ToString()),
                new Claim(ClaimTypes.Name, $"User{userId}")
            };

            var token = new JwtSecurityToken(
                issuer: "mySystem",
                audience: "myUsers",
                claims: claims,
                expires: DateTime.Now.AddMinutes(10),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        // Private method to generate JWT token with 2-minute expiration for testing
        private string GenerateJSONWebTokenShort(int userId, string userRole)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecurityKey));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Role, userRole),
                new Claim("UserId", userId.ToString()),
                new Claim(ClaimTypes.Name, $"User{userId}")
            };

            var token = new JwtSecurityToken(
                issuer: "mySystem",
                audience: "myUsers",
                claims: claims,
                expires: DateTime.Now.AddMinutes(2), // 2-minute expiration for testing
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}




