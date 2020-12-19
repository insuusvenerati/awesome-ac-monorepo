import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AchievementsModule } from './achievements/achievements.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { NookmilesModule } from './nookmiles/nookmiles.module';
import { ReactionsModule } from './reactions/reactions.module';
import { RecipesModule } from './recipes/recipes.module';
import { VillagersModule } from './villagers/villagers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      loggerLevel: 'debug',
    }),
    VillagersModule,
    RecipesModule,
    NookmilesModule,
    ReactionsModule,
    ItemsModule,
    AchievementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
