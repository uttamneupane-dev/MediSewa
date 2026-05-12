using Medisewa.Application.Common.Interfaces;
using Medisewa.Infrastructure.Persistence;
using Medisewa.Infrastructure.Persistence.Repositories;
using Medisewa.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Medisewa.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IPatientRepository, PatientRepository>();
        services.AddScoped<IPasswordHasher, PasswordHasher>();

        return services;
    }
}
