import { Controller, Get } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {
  @Get()
  async findAll(): Promise<string> {
    return 'Hello recipes';
  }
}
