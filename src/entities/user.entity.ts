import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Settings } from './settings.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Settings, settings => settings.user, { cascade: true })
  settings: Settings;
}