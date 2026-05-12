using MediatR;
using Medisewa.Domain.Enums;

namespace Medisewa.Application.Features.Patients.Commands.UpdatePatient;

public record UpdatePatientCommand(
    Guid Id,
    string FirstName,
    string LastName,
    DateOnly DateOfBirth,
    Gender Gender,
    string PhoneNumber,
    string Email,
    string Address,
    BloodType? BloodType
) : IRequest<Unit>;
