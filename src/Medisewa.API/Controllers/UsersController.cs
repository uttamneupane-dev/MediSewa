using MediatR;
using Medisewa.Application.Features.Users.Commands.CreateUser;
using Medisewa.Application.Features.Users.Commands.UpdateUser;
using Microsoft.AspNetCore.Mvc;

namespace Medisewa.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly ISender _sender;

    public UsersController(ISender sender)
    {
        _sender = sender;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateUserCommand command, CancellationToken cancellationToken)
    {
        var id = await _sender.Send(command, cancellationToken);
        return CreatedAtAction(nameof(Create), new { id }, new { id });
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, [FromBody] UpdateUserCommand command, CancellationToken cancellationToken)
    {
        await _sender.Send(command with { Id = id }, cancellationToken);
        return NoContent();
    }
}
