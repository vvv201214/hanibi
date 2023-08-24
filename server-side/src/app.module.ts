import { ConfigModule } from '@nestjs/config';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormController } from './form.controller';
import { FormService } from './form.service';
import { FormSchema } from './form.schema';
import path = require('path');

@Module({
  // import config and mongoose
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(__dirname, '../config.env')
    }),
    MongooseModule.forRoot(process.env.DB),
    MongooseModule.forFeature([{ name: 'Form', schema: FormSchema }]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class AppModule {}
