import { Module } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { AchievementsController } from './achievements.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from '../items/entities/item.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],
  controllers: [AchievementsController],
  providers: [AchievementsService],
})
export class AchievementsModule {}
