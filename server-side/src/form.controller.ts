import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from './form.schema';

@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  //post request
  @Post()
  async submitForm(@Body() formData: Form): Promise<Form> {
    return this.formService.submitForm(formData);
  }

  //get request
  @Get(':username')
  async getFormByUsername(@Param('username') username: string): Promise<Form | null> {
    return this.formService.getFormByUsername(username);
  }
}
