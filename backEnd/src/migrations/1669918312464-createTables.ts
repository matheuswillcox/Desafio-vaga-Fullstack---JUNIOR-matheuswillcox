import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1669918312464 implements MigrationInterface {
    name = 'createTables1669918312464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "telefone" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Contato" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "telefone" integer NOT NULL, "userId" uuid, CONSTRAINT "PK_98afb373bb13482e3e639c4935e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Contato" ADD CONSTRAINT "FK_13f5c41422d1e2fe0f12632b6ab" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Contato" DROP CONSTRAINT "FK_13f5c41422d1e2fe0f12632b6ab"`);
        await queryRunner.query(`DROP TABLE "Contato"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
