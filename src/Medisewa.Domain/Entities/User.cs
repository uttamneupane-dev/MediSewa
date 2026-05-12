using Medisewa.Domain.Common;
using Medisewa.Domain.Enums;

namespace Medisewa.Domain.Entities;

public class User : BaseEntity
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PasswordHash { get; set; } = string.Empty;
    public UserRole Role { get; set; }
    public Gender Gender { get; set; }
    public bool IsActive { get; set; } = true;
}
