import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Nookmile, NookmileDocument } from './entities/nookmile.entity';

@Injectable()
export class NookmilesService {
  constructor(
    @InjectModel(Nookmile.name) private nookmileModel: Model<NookmileDocument>,
  ) {}

  async findAll(): Promise<Nookmile[]> {
    return await this.nookmileModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} nookmile`;
  }
}
