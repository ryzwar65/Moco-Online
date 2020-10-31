import { General } from "./base.entity";
export declare type UserRoleType = "admin" | "dosen" | "mahasiswa";
export declare class UserEntity extends General {
    fullName: string;
    email: string;
    type: UserRoleType[];
    password: string;
    reset_token?: string;
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string): any;
    hashPassword(): void;
}
