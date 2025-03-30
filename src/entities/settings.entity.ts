import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('settings')
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'is_notification_enabled', default: true })
  isNotificationEnabled: boolean;

  @Column({ name: 'is_new_dashboard_enabled', default: false })
  isNewDashboardEnabled: boolean;

  @Column({ default: 'UTC' })
  timezone: string;

  @Column({ name: 'user_id' })
  userId: number;

  @OneToOne(() => User, user => user.settings)
  @JoinColumn({ name: 'user_id' })
  user: User;
}