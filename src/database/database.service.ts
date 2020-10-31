import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory{
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            name:"default",
            type:"mysql",
            host:process.env.DATABASE_HOST,
            port:parseInt(process.env.DATABASE_PORT),
            username:process.env.DATABASE_USERNAME,
            password:process.env.DATABASE_PASSWORD,
            database:process.env.DATABASE_NAME,
            synchronize:true,
            dropSchema:false,
            logging:true,
            entities:["dist/**/*.entity{.ts,.js}"]
        };
    }
}