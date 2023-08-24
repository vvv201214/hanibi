import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './form.schema';

@Injectable()
export class FormService {
  constructor(@InjectModel('Form') private formModel: Model<Form>) {}
 
  // insert form data in database
  async submitForm(data: Form): Promise<Form> {
    try {
      const createdForm = new this.formModel(data);
      return createdForm.save();
    } catch (error) {
      throw new Error('Failed to submit form'); // error response
    }
  }

  // get data by username from database
  async getFormByUsername(username: string): Promise<Form | null> {
    try {
      return this.formModel.findOne({ username }).exec();
    } catch (error) {
      throw new Error('Failed to fetch user data'); // error response
    }
  }
}
