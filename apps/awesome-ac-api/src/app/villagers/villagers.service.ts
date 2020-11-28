import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListAllVillagers } from './dto/villager.dto';
import { Villager, VillagerDocument } from './villager.entity';

@Injectable()
export class VillagersService {
  constructor(
    @InjectModel(Villager.name) private villagerModel: Model<VillagerDocument>,
  ) {}

  async findAll(): Promise<Villager[]> {
    return await this.villagerModel.find().exec();
  }

  async findOne(id: string) {
    return await this.villagerModel.findOne({ uniqueEntryId: id }).exec();
  }

  async findMany(query: ListAllVillagers): Promise<VillagerDocument[]> {
    return await this.villagerModel
      .find({
        $or: [
          { name: query.name },
          { species: query.species },
          { gender: query.gender },
          { personality: query.personality },
        ],
      })
      .exec();
  }
}
