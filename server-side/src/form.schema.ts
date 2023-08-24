import * as mongoose from 'mongoose';

export const FormSchema = new mongoose.Schema({
  username: String,
  phoneNumber: String,
  email: String,
  name: String,
  dob: String,
});

export interface Form extends mongoose.Document {
  username: string;
  phoneNumber: string;
  email: string;
  name: string;
  dob: string;
}
