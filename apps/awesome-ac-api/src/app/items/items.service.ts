import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<ItemDocument>) {}

  findAll() {
    return this.itemModel.find().exec();
  }

  async findItemById(id: string) {
    return await this.itemModel.findOne({ id: id });
  }

  async findOneVariantByUnqiueId(internalId: number): Promise<Item> {
    console.log(typeof internalId);
    return await this.itemModel
      .findOne({ 'variants.internalId': internalId })
      .exec();
  }
}
