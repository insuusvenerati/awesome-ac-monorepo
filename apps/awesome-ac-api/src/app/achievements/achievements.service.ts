import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from '../items/entities/item.entity';

@Injectable()
export class AchievementsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  findAll() {
    return this.itemModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} achievement`;
  }
}
