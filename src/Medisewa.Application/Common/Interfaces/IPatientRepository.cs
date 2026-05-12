using Medisewa.Domain.Entities;

namespace Medisewa.Application.Common.Interfaces;

public interface IPatientRepository
{
    Task<Patient?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
    Task AddAsync(Patient patient, CancellationToken cancellationToken = default);
    Task UpdateAsync(Patient patient, CancellationToken cancellationToken = default);
}
