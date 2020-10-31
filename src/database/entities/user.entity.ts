import {} from "@nestjs/typeorm";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { General } from "./base.entity";
import * as bcrypt from "bcryptjs";

export type UserRoleType = "admin" | "dosen" | "mahasiswa";

@Entity("users")
export class UserEntity extends General {
    @Column({type:"varchar"})
    fullName: string;

    @Column({type:"varchar", length:"50", unique:true})
    email: string;
    
    @Column({type:"enum",enum:["admin","dosen","mahasiswa"]})
    type:UserRoleType[];

    @Column({type:"varchar"})
    password:string;

    @Column({ nullable: true })
    reset_token?: string; 

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

    hashPassword() {
        if (this.password) {
            this.password = bcrypt.hashSync(this.password, 8);
        }
    }
}
