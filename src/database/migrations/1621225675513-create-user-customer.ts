import {MigrationInterface, QueryRunner} from "typeorm";

export class createUserCustomer1621225675513 implements MigrationInterface {
    name = 'createUserCustomer1621225675513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL, "email" varchar(255) NOT NULL, "password" varchar(255) NOT NULL, "role" varchar(255) NOT NULL, "createAt" datetime NOT NULL CONSTRAINT "DF_d3362afece36e8f04a6dbd87038" DEFAULT CURRENT_TIMESTAMP, "updateAt" datetime NOT NULL CONSTRAINT "DF_c028ce9feb933a26c798b1b5ba7" DEFAULT CURRENT_TIMESTAMP, "customerId" int, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6c687a8fa35b0ae35ce766b56c" ON "user" ("customerId") WHERE "customerId" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "customer" ("id" int NOT NULL, "name" varchar(255) NOT NULL, "lastName" varchar(255) NOT NULL, "phone" varchar(100) NOT NULL, "createAt" datetime NOT NULL CONSTRAINT "DF_4a749d5dbfaa03a8d73abbd025e" DEFAULT CURRENT_TIMESTAMP, "updateAt" datetime NOT NULL CONSTRAINT "DF_e6d93b5e8aa485cf8872d1fa258" DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "DF_7211e9d70a6760f5846b95a4778"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "DF_7211e9d70a6760f5846b95a4778" DEFAULT CURRENT_TIMESTAMP FOR "createAt"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updateAt" datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "DF_176c28170f5162a797f16fe9fd1"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "DF_176c28170f5162a797f16fe9fd1" DEFAULT CURRENT_TIMESTAMP FOR "updateAt"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_6c687a8fa35b0ae35ce766b56ce"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "DF_176c28170f5162a797f16fe9fd1"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "DF_176c28170f5162a797f16fe9fd1" DEFAULT getdate() FOR "updateAt"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updateAt" datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "DF_7211e9d70a6760f5846b95a4778"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "DF_7211e9d70a6760f5846b95a4778" DEFAULT getdate() FOR "createAt"`);
        await queryRunner.query(`DROP TABLE "customer"`);
        await queryRunner.query(`DROP INDEX "REL_6c687a8fa35b0ae35ce766b56c" ON "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
