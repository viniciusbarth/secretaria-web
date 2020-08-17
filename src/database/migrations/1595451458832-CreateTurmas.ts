import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateTurmas1595451458832 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'turmas',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                    },
                    {
                        name: 'periodo',
                        type: 'varchar', 
                    },
                    {
                        name: "created_at",
                        type: 'Timestamp',
                        default: 'now()'
                    },
                    {
                        name: "updated_at",
                        type: 'Timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('turmas')
    }

}
