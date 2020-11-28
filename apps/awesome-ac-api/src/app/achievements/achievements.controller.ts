import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AchievementsService } from './achievements.service';

@Controller('achievements')
@ApiTags('Achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Get()
  findAll() {
    return this.achievementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.achievementsService.findOne(+id);
  }
}
