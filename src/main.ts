import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'dotenv/config';

async function bootstrap() {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api do curso de nestjs')
    .setDescription('Uma api de estudo do nestjs')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
}
bootstrap();
