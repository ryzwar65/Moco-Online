import { UsersService } from './users.service';
import { UserEntity } from 'src/database/entities/user.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): any;
    createData(password: string, fullname: string, email: string): any;
    getById(uuid: string): Promise<UserEntity>;
    updateData(uuid: string, password: string, fullname: string, email: string): Promise<UserEntity>;
    deleteData(uuid: any): Promise<{
        message: string;
    }>;
}
