import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Nookmile } from './entities/nookmile.entity';
import { NookmilesService } from './nookmiles.service';

@Controller('nookmiles')
@ApiTags('Nookmiles')
export class NookmilesController {
  constructor(private readonly nookmilesService: NookmilesService) {}

  @Get()
  async findAll(): Promise<Nookmile[]> {
    return await this.nookmilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nookmilesService.findOne(+id);
  }
}
