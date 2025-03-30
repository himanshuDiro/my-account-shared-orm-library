import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../entities/user.entity';
import { Settings } from '../entities/settings.entity';
import { InitialMigration1717331000000 } from '../migrations/1717331000000-InitialMigration';

// Load environment variables from .env file
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'my-account',
  synchronize: false,
  logging: true,
  entities: [User, Settings],
  migrations: [InitialMigration1717331000000],
  subscribers: [],
});