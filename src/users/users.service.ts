import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private UserRepo : Repository<UserEntity>        
    ){}         

    async showAll(){        
        return await this.UserRepo.find();
    }

    async showById(id:string){        
        return await this.UserRepo.findOneOrFail({where:{uuid:id}});
    }

    async create(data){   
        var insertData = new UserEntity();
        insertData.email = data.email;
        insertData.fullName = data.fullName;
        insertData.password = data.password;
        insertData.hashPassword();                
        await this.UserRepo.save(insertData);
        return insertData;
    }

    async update(id:string,data){        
        await this.UserRepo.findOneOrFail({where:{uuid:id}})
        .then(async (updateUser)=>{
            updateUser.fullName = data.fullName;
            updateUser.email = data.email;            
            if(data.password){
                updateUser.password = data.password;
                updateUser.hashPassword();
            }
            await this.UserRepo.save(updateUser);
        })
        return this.UserRepo.findOne({where:{uuid:id}});
    }

    async delete(data){ 
        var waitingList : UserEntity[]=[];          
        var count = 0;      
        await Promise.all(
            data.map(async (item)=>{
                count++;
                this.UserRepo.findOneOrFail({
                    where:{
                        uuid:item,
                    },
                    withDeleted:true
                }).then(async (success)=>{
                    await this.UserRepo.remove(success);
                    waitingList.push(success);
                })
            })
        )         
        return {
            message:`${count} Users Successfully Deleted`
        }
    }
}
