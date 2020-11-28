import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListAllVillagers } from './dto/villager.dto';
import { Villager } from './villager.entity';
import { VillagersService } from './villagers.service';

@Controller('villagers')
@ApiTags('Villagers')
export class VillagersController {
  constructor(private readonly villagerService: VillagersService) {}

  @Get()
  async findAll(): Promise<Villager[]> {
    return this.villagerService.findAll();
  }

  @Get('filter')
  @ApiResponse({
    description: 'Returns Villagers based on filters provided',
    status: 200,
    type: [Villager],
  })
  async findMany(@Query() query: ListAllVillagers): Promise<Villager[]> {
    return await this.villagerService.findMany(query);
  }

  @Get(':id')
  @ApiResponse({
    description: 'Returns a single Villager given an ID',
    status: 200,
    type: Villager,
  })
  findOne(@Param('id') id: string) {
    return this.villagerService.findOne(id);
  }
}
