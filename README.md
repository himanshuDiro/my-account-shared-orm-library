# My-Account Shared ORM Library

A TypeORM-based shared library for managing database entities and migrations for the My-Account application.

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Database Management](#database-management)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## 🔍 Overview

This library provides a centralized database management solution for the My-Account application, including entity definitions, migrations, and database configuration using TypeORM.

## ✨ Features

- Pre-configured TypeORM setup
- User and Settings entity definitions
- Database migrations with sample data
- Environment-based configuration
- TypeScript support

## 🛠 Tech Stack

- TypeScript
- TypeORM
- PostgreSQL
- Node.js

## 📝 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

## 💻 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-account-shared-orm-library.git
   cd my-account-shared-orm-library
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_DATABASE=my-account
   ```

## ⚙️ Configuration

### Database Configuration
The database connection is configured in `src/database/data-source.ts`. You can customize it using environment variables:

```typescript
{
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'my-account'
}
```

## 📖 Usage

### As a Dependency

1. Install the library in your project:
   ```bash
   npm install git+https://github.com/your-username/my-account-shared-orm-library.git
   ```

2. Import entities and use them in your application:
   ```typescript
   import { User, Settings } from 'my-account-shared-orm-library';
   import { AppDataSource } from 'my-account-shared-orm-library';
   ```

## 🗄️ Database Management

### Running Migrations

```bash
# Run migrations
npm run migration:run

# Create a new migration
npm run migration:create -- -n YourMigrationName

# Generate a migration from entity changes
npm run migration:generate -- -n YourMigrationName

# Revert last migration
npm run migration:revert
```

### Database Commands

```bash
# Connect to database
psql -U postgres my-account

# List all tables
\dt

# View table structure
\d users
\d settings
```

## 📁 Project Structure

```
my-account-shared-orm-library/
├── src/
│   ├── entities/          # Database entity definitions
│   │   ├── user.entity.ts
│   │   └── settings.entity.ts
│   ├── migrations/        # Database migrations
│   │   └── 1717331000000-InitialMigration.ts
│   ├── database/          # Database connection configuration
│   │   └── data-source.ts
│   └── index.ts           # Main export file
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # Documentation
```

## 🚀 Development

### Setting Up Development Environment

1. Clone the repository
2. Install dependencies
3. Set up your `.env` file
4. Run migrations
5. Start development

### Code Style

- Use TypeScript for all files
- Follow camelCase naming convention
- Document your code with JSDoc comments
- Write meaningful commit messages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.