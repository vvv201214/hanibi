import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './form.schema';

@Injectable()
export class FormService {
  constructor(@InjectModel('Form') private formModel: Model<Form>) {}
 
  // insert form data in database
  async submitForm(data: Form): Promise<Form> {
    const createdForm = new this.formModel(data);
    return createdForm.save();
  }

  // get data by username from database
  async getFormByUsername(username: string): Promise<Form | null> {
    return this.formModel.findOne({ username }).exec();
  }
}
