import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import path = require('path');

async function bootstrap() {
  dotenv.config({ path: path.resolve(__dirname, '../config.env') });

  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // listening to port 8080
  await app.listen(8080);
}
bootstrap();
