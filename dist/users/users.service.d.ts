import { UserEntity } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private UserRepo;
    constructor(UserRepo: Repository<UserEntity>);
    showAll(): Promise<UserEntity[]>;
    showById(id: string): Promise<UserEntity>;
    create(data: any): Promise<UserEntity>;
    update(id: string, data: any): Promise<UserEntity>;
    delete(data: any): Promise<{
        message: string;
    }>;
}
