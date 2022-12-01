import {  Column, PrimaryColumn, ManyToOne, Entity } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity("Contato")

class Contato{

    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name: string;
  
    @Column()
    email: string;

    @Column()
    telefone: number;
    
    @ManyToOne(()=> User)
    user: User;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}

export { Contato }