using MediatR;
using Medisewa.Application.Common.Interfaces;
using Medisewa.Domain.Entities;

namespace Medisewa.Application.Features.Patients.Commands.CreatePatient;

public class CreatePatientHandler : IRequestHandler<CreatePatientCommand, Guid>
{
    private readonly IPatientRepository _patientRepository;

    public CreatePatientHandler(IPatientRepository patientRepository)
    {
        _patientRepository = patientRepository;
    }

    public async Task<Guid> Handle(CreatePatientCommand request, CancellationToken cancellationToken)
    {
        var patient = new Patient
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
            DateOfBirth = request.DateOfBirth,
            Gender = request.Gender,
            PhoneNumber = request.PhoneNumber,
            Email = request.Email,
            Address = request.Address,
            BloodType = request.BloodType
        };

        await _patientRepository.AddAsync(patient, cancellationToken);

        return patient.Id;
    }
}
