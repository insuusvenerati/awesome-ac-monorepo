import { Module } from '@nestjs/common';
import { NookmilesService } from './nookmiles.service';
import { NookmilesController } from './nookmiles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Nookmile, NookmileSchema } from './entities/nookmile.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Nookmile.name, schema: NookmileSchema },
    ]),
  ],
  controllers: [NookmilesController],
  providers: [NookmilesService],
})
export class NookmilesModule {}
