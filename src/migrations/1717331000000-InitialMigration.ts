import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1717331000000 implements MigrationInterface {
    name = 'InitialMigration1717331000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" SERIAL NOT NULL,
                "first_name" character varying NOT NULL,
                "last_name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "password" character varying NOT NULL,
                CONSTRAINT "UQ_users_email" UNIQUE ("email"),
                CONSTRAINT "PK_users" PRIMARY KEY ("id")
            )
        `);
        
        await queryRunner.query(`
            CREATE TABLE "settings" (
                "id" SERIAL NOT NULL,
                "is_notification_enabled" boolean NOT NULL DEFAULT true,
                "is_new_dashboard_enabled" boolean NOT NULL DEFAULT false,
                "timezone" character varying NOT NULL DEFAULT 'UTC',
                "user_id" integer NOT NULL,
                CONSTRAINT "REL_settings_user_id" UNIQUE ("user_id"),
                CONSTRAINT "PK_settings" PRIMARY KEY ("id")
            )
        `);
        
        await queryRunner.query(`
            ALTER TABLE "settings" 
            ADD CONSTRAINT "FK_settings_users" 
            FOREIGN KEY ("user_id") 
            REFERENCES "users"("id") 
            ON DELETE CASCADE
        `);

        // Insert some sample data
        await queryRunner.query(`
            INSERT INTO "users" ("first_name", "last_name", "email", "password")
            VALUES 
            ('John', 'Doe', 'john.doe@example.com', '$2b$10$1234567890123456789012'), 
            ('Jane', 'Smith', 'jane.smith@example.com', '$2b$10$1234567890123456789012'),
            ('Bob', 'Johnson', 'bob.johnson@example.com', '$2b$10$1234567890123456789012')
        `);

        await queryRunner.query(`
            INSERT INTO "settings" ("is_notification_enabled", "is_new_dashboard_enabled", "timezone", "user_id")
            VALUES 
            (true, false, 'UTC', 1),
            (true, true, 'America/New_York', 2),
            (false, false, 'Europe/London', 3)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" DROP CONSTRAINT "FK_settings_users"`);
        await queryRunner.query(`DROP TABLE "settings"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}