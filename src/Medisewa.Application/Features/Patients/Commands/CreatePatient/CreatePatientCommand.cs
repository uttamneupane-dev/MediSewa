using MediatR;
using Medisewa.Domain.Enums;

namespace Medisewa.Application.Features.Patients.Commands.CreatePatient;

public record CreatePatientCommand(
    string FirstName,
    string LastName,
    DateOnly DateOfBirth,
    Gender Gender,
    string PhoneNumber,
    string Email,
    string Address,
    BloodType? BloodType
) : IRequest<Guid>;
