using MediatR;
using Medisewa.Application.Common.Exceptions;
using Medisewa.Application.Common.Interfaces;
using Medisewa.Domain.Entities;

namespace Medisewa.Application.Features.Users.Commands.UpdateUser;

public class UpdateUserHandler : IRequestHandler<UpdateUserCommand, Unit>
{
    private readonly IUserRepository _userRepository;

    public UpdateUserHandler(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<Unit> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
    {
        var user = await _userRepository.GetByIdAsync(request.Id, cancellationToken)
            ?? throw new NotFoundException(nameof(User), request.Id);

        user.FirstName = request.FirstName;
        user.LastName = request.LastName;
        user.Email = request.Email;
        user.Role = request.Role;
        user.Gender = request.Gender;
        user.IsActive = request.IsActive;
        user.UpdatedAt = DateTime.UtcNow;

        await _userRepository.UpdateAsync(user, cancellationToken);

        return Unit.Value;
    }
}
