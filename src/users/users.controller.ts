import { Controller, Get, HttpStatus, Post, Res, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { UserDTO } from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

@Controller('users')
export class UsersController {

    constructor(
        private usersService : UsersService,
    ){}

    @Get() 
    getAll() :any {

        return this.usersService.showAll();
        // res.status(HttpStatus.OK).json([this.usersService.showAll]);
    }

    @Post()
    createData(
        @Body('password') password:string,
        @Body('fullname') fullname:string,
        @Body('email') email:string
    ):any{        
        var data = {
            email:email,
            fullName:fullname,
            password:password
        }        
        return this.usersService.create(data);
    }

    @Get(':uuid')
    getById(@Param("uuid") uuid:string){
        return this.usersService.showById(uuid);
    }

    @Put(":uuid")
    updateData(@Param("uuid") uuid:string,
        @Body('password') password:string,
        @Body('fullname') fullname:string,
        @Body('email') email:string
    ){
        var data = {
            email:email,
            fullName:fullname,
            password:password
        }        
        return this.usersService.update(uuid,data);
    }

    @Delete()
    deleteData(@Body("uuid") uuid:any){
        return this.usersService.delete(uuid);
    }
}
