import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHistory1621706911850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'history',
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'city',
                        type: 'varchar'
                    },
                    {
                        name: 'country',
                        type: 'varchar'
                    },
                    {
                        name: 'temperature',
                        type: 'numeric',
                    },
                    {
                        name: 'humidity',
                        type: 'numeric',
                    },
                    {
                        name: 'weather',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('history');
    }

}
