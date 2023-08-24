import { Controller, Get, Post, Put, Param, Body, NotFoundException } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from './form.schema';

@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  //post request
  @Post()
  async submitForm(@Body() formData: Form): Promise<Form> {
    try {
      return await this.formService.submitForm(formData);
    } catch (error) {
      throw new Error('Failed to submit form'); // error response
    }
  }

  //get request
  @Get(':username')
  async getFormByUsername(@Param('username') username: string): Promise<Form | null> {
    try {
      const form = await this.formService.getFormByUsername(username);
      if (!form) {
        throw new NotFoundException(`Form with username ${username} not found`);
      }
      return form;
    } catch (error) {
      throw new Error('Failed to retrieve form'); // error response
    }
  }
}
