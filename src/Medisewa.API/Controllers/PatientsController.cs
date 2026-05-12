using MediatR;
using Medisewa.Application.Features.Patients.Commands.CreatePatient;
using Medisewa.Application.Features.Patients.Commands.UpdatePatient;
using Microsoft.AspNetCore.Mvc;

namespace Medisewa.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PatientsController : ControllerBase
{
    private readonly ISender _sender;

    public PatientsController(ISender sender)
    {
        _sender = sender;
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreatePatientCommand command, CancellationToken cancellationToken)
    {
        var id = await _sender.Send(command, cancellationToken);
        return CreatedAtAction(nameof(Create), new { id }, new { id });
    }

    [HttpPut("{id:guid}")]
    public async Task<IActionResult> Update(Guid id, [FromBody] UpdatePatientCommand command, CancellationToken cancellationToken)
    {
        await _sender.Send(command with { Id = id }, cancellationToken);
        return NoContent();
    }
}
