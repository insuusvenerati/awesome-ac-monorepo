import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Villager, VillagerSchema } from './villager.entity';
import { VillagersController } from './villagers.controller';
import { VillagersService } from './villagers.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Villager.name, schema: VillagerSchema },
    ]),
  ],
  controllers: [VillagersController],
  providers: [VillagersService],
})
export class VillagersModule {}
