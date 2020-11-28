import {
  Controller,
  Get,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Item } from './entities/item.entity';
import { ItemsService } from './items.service';

@Controller('items')
@ApiTags('Items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get('filter')
  findById(@Query('id') id: string) {
    return this.itemsService.findItemById(id);
  }

  @Get('/variant/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiResponse({
    description: 'Returns a single Item Variant',
    status: 200,
    type: Item,
  })
  async findOneVariantByUnqiueId(@Param('id') id: number): Promise<Item> {
    return await this.itemsService.findOneVariantByUnqiueId(id);
  }
}
