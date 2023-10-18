import { MigrationInterface, QueryRunner, Table } from 'typeorm';
export class Restaurant1697609150514 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'restaurants',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address_id',
            type: 'int',
          },
          {
            name: 'owner_id',
            type: 'int',
          },
          {
            name: 'is_active',
            type: 'bool',
            default: false,
          },
          {
            name: 'is_verified',
            type: 'int',
          },
          {
            name: 'fssai_number',
            type: 'int',
          },
          {
            name: 'open_time',
            type: 'timestamp',
          },
          {
            name: 'close_time',
            type: 'timestamp',
          },
          {
            name: 'type_id',
            type: 'int',
          },
          {
            name: 'day_of_week',
            type: 'varchar',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('restaurants');
  }
}
