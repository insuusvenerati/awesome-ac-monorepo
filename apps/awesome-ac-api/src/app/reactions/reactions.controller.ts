import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Reaction } from './entities/reaction.entity';
import { ReactionsService } from './reactions.service';

@Controller('reactions')
@ApiTags('Reactions')
export class ReactionsController {
  constructor(private readonly reactionsService: ReactionsService) {}

  @Get()
  findAll() {
    return this.reactionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Reaction> {
    return await this.reactionsService.findOne(+id);
  }
}
