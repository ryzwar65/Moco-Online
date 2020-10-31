import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '../app.module';

class Server {    
    public static async run() : Promise<any>{
        const app = await NestFactory.create<NestExpressApplication>(AppModule);
        app.enableCors({
            origin: true,
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
            credentials: true,
        });
        await app.listen(process.env.APP_PORT);
    }
}

export default Server;