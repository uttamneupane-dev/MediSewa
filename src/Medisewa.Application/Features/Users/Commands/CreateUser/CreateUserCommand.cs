using MediatR;
using Medisewa.Domain.Enums;

namespace Medisewa.Application.Features.Users.Commands.CreateUser;

public record CreateUserCommand(
    string FirstName,
    string LastName,
    string Email,
    string Password,
    UserRole Role,
    Gender Gender
) : IRequest<Guid>;
