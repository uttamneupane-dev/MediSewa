using MediatR;
using Medisewa.Application.Common.Exceptions;
using Medisewa.Application.Common.Interfaces;
using Medisewa.Domain.Entities;

namespace Medisewa.Application.Features.Patients.Commands.UpdatePatient;

public class UpdatePatientHandler : IRequestHandler<UpdatePatientCommand, Unit>
{
    private readonly IPatientRepository _patientRepository;

    public UpdatePatientHandler(IPatientRepository patientRepository)
    {
        _patientRepository = patientRepository;
    }

    public async Task<Unit> Handle(UpdatePatientCommand request, CancellationToken cancellationToken)
    {
        var patient = await _patientRepository.GetByIdAsync(request.Id, cancellationToken)
            ?? throw new NotFoundException(nameof(Patient), request.Id);

        patient.FirstName = request.FirstName;
        patient.LastName = request.LastName;
        patient.DateOfBirth = request.DateOfBirth;
        patient.Gender = request.Gender;
        patient.PhoneNumber = request.PhoneNumber;
        patient.Email = request.Email;
        patient.Address = request.Address;
        patient.BloodType = request.BloodType;
        patient.UpdatedAt = DateTime.UtcNow;

        await _patientRepository.UpdateAsync(patient, cancellationToken);

        return Unit.Value;
    }
}
