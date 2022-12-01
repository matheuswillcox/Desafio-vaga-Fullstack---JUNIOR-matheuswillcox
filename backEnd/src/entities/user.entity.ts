import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Contato } from "./contato.entity";

@Entity("user")
class User {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  telefone: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @OneToMany(() => Contato, contato => contato.user)
  contato: Contato[]

  constructor() {
    if (!this.id) {
        this.id = uuid();
    }
}
}

export { User };
