using MediatR;
using Medisewa.Domain.Enums;

namespace Medisewa.Application.Features.Users.Commands.UpdateUser;

public record UpdateUserCommand(
    Guid Id,
    string FirstName,
    string LastName,
    string Email,
    UserRole Role,
    Gender Gender,
    bool IsActive
) : IRequest<Unit>;
