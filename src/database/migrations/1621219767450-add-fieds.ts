import {MigrationInterface, QueryRunner} from "typeorm";

export class addFieds1621219767450 implements MigrationInterface {
    name = 'addFieds1621219767450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "createAt" datetime NOT NULL CONSTRAINT "DF_7211e9d70a6760f5846b95a4778" DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "product" ADD "updateAt" datetime NOT NULL CONSTRAINT "DF_176c28170f5162a797f16fe9fd1" DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "DF_176c28170f5162a797f16fe9fd1"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "DF_7211e9d70a6760f5846b95a4778"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createAt"`);
    }

}
