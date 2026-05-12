using MediatR;
using Medisewa.Application.Common.Interfaces;
using Medisewa.Domain.Entities;

namespace Medisewa.Application.Features.Users.Commands.CreateUser;

public class CreateUserHandler : IRequestHandler<CreateUserCommand, Guid>
{
    private readonly IUserRepository _userRepository;
    private readonly IPasswordHasher _passwordHasher;

    public CreateUserHandler(IUserRepository userRepository, IPasswordHasher passwordHasher)
    {
        _userRepository = userRepository;
        _passwordHasher = passwordHasher;
    }

    public async Task<Guid> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        var user = new User
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
            Email = request.Email,
            PasswordHash = _passwordHasher.Hash(request.Password),
            Role = request.Role,
            Gender = request.Gender
        };

        await _userRepository.AddAsync(user, cancellationToken);

        return user.Id;
    }
}
