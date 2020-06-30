import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CREATEuser1593193026235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> 
    {
        await queryRunner.createTable
        (
            new Table
            (
                {
                    name:'User',
                    columns:
                    [
                        {
                            name:'ID',
                            type:'uuid',
                            isPrimary: true,
                            generationStrategy: 'uuid',
                            default: 'uuid_generate_v4()',
                        },
                        {
                            name: 'docID',
                            type: 'varchar'
                        },
                        {
                            name:'nome',
                            type:'varchar',
                        },
                        {
                            name:'email',
                            type:'varchar'
                        },
                        {
                            name:'telefoneOpc',
                            type:'varchar'
                        },
                        {
                            name:'telefoneMov',
                            type:'varchar',
                        },
                        {
                            name:'endereco',
                            type:'varchar',
                        },
                        {
                            name: 'updateDate',
                            type:'timestamp',   
                        },
                        {
                            name: 'foto',
                            type: 'varchar',
                        },
                        {
                            name: 'login',
                            type: 'varchar',
                        },
                        {
                            name: 'senha',
                            type: 'varchar',
                        },
                        {
                            name: 'createDate',
                            type: 'timestamp',
                        },
                        {
                            name: 'saldo',
                            type: 'NUMERIC(9, 2)',
                            default: '0',
                        },
                        {
                            name: 'nascimento',
                            type: 'date',
                        },
                        {
                            name: 'fotoDoc_frente',
                            type:'varchar',
                        },
                        {
                            name: 'fotoDoc_verso',
                            type:'varchar',
                        },
                        {
                            name: 'identifier_ID',
                            type: 'varchar',
                        }                
                    ]
                }
        )
        );

        await queryRunner.createForeignKey('User',
                new TableForeignKey
                (
                    {
                        name: 'FK_ID',
                        columnNames:['Identifier_ID'],
                        referencedColumnNames: ["ID"],
                        referencedTableName: "Identificador",
                        onDelete: "CASCADE"
                    }
                )
        );

    }


    public async down(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.dropForeignKey('User','FK_ID');
        await queryRunner.dropTable('User');
    }

}