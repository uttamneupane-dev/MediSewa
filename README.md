# Medisewa

A healthcare management built with **.NET 10** following **Clean Architecture** principles.

---

## Architecture

The solution is organized into four projects, each with a strict dependency rule — inner layers never depend on outer layers.

```
Medisewa.API  ──►  Medisewa.Application  ──►  Medisewa.Domain
     │                                              ▲
     └──────────►  Medisewa.Infrastructure  ────────┘
```

| Project                   | Role                                    | Dependencies                 |
| ------------------------- | --------------------------------------- | ---------------------------- |
| `Medisewa.Domain`         | Entities, enums, base types             | None                         |
| `Medisewa.Application`    | Use cases, interfaces, commands         | Domain                       |
| `Medisewa.Infrastructure` | EF Core, repositories, password hashing | Application                  |
| `Medisewa.API`            | HTTP controllers, DI wiring             | Application + Infrastructure |

---

```
src/
├── Medisewa.Domain/
│   ├── Common/
│   │   └── BaseEntity.cs              # Id, CreatedAt, UpdatedAt
│   ├── Entities/
│   │   ├── Patient.cs
│   │   └── User.cs
│   └── Enums/
│       ├── BloodType.cs
│       ├── Gender.cs
│       └── UserRole.cs
│
├── Medisewa.Application/
│   ├── Common/
│   │   ├── Exceptions/
│   │   │   └── NotFoundException.cs
│   │   └── Interfaces/
│   │       ├── IPasswordHasher.cs
│   │       ├── IPatientRepository.cs
│   │       └── IUserRepository.cs
│   └── Features/
│       ├── Patients/Commands/
│       │   ├── CreatePatient/         # CreatePatientCommand + Handler
│       │   └── UpdatePatient/         # UpdatePatientCommand + Handler
│       └── Users/Commands/
│           ├── CreateUser/            # CreateUserCommand + Handler
│           └── UpdateUser/            # UpdateUserCommand + Handler
│
├── Medisewa.Infrastructure/
│   ├── Persistence/
│   │   ├── ApplicationDbContext.cs
│   │   └── Repositories/
│   │       ├── PatientRepository.cs
│   │       └── UserRepository.cs
│   ├── Services/
│   │   └── PasswordHasher.cs          # BCrypt implementation
│   └── DependencyInjection.cs
│
└── Medisewa.API/
    ├── Controllers/
    │   ├── PatientsController.cs
    │   └── UsersController.cs
    └── Program.cs
```

---

## Tech Stack

| Concern          | Library / Tool                        |
| ---------------- | ------------------------------------- |
| Framework        | ASP.NET Core 10                       |
| ORM              | Entity Framework Core 10              |
| Database         | Microsoft SQL Server                  |
| Mediator / CQRS  | MediatR 14                            |
| Password Hashing | BCrypt.Net-Next 4                     |
| API Docs         | Built-in OpenAPI (`/openapi/v1.json`) |

---

## Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- SQL Server instance (local or remote)

---

## Getting Started

**1. Clone the repository**

```bash
git clone <repository-url>
cd Medisewa
```

**2. Configure the database connection**

Edit `src/Medisewa.API/appsettings.json` and update the connection string to match your SQL Server instance:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=MedisewaDb;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

The database `MedisewaDb` is created automatically on first run.

**3. Run the API**

```bash
dotnet run --project src/Medisewa.API
```

**4. Explore the API**

Navigate to `https://localhost:{port}/openapi/v1.json` to view the OpenAPI spec.

---
