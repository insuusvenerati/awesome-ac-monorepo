import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type VillagerDocument = Villager & Document;

@Schema()
export class Villager {
  @Prop()
  @ApiProperty()
  _id: string;

  @Prop()
  @ApiProperty()
  sourceSheet: string;
  @Prop()
  @ApiProperty()
  name: string;
  @Prop()
  @ApiProperty()
  iconImage: string;
  @Prop()
  @ApiProperty()
  photoImage: string;
  @Prop()
  @ApiProperty()
  houseImage: string;
  @Prop()
  @ApiProperty()
  species: string;
  @Prop()
  @ApiProperty()
  gender: string;
  @Prop()
  @ApiProperty()
  personality: string;
  @Prop()
  @ApiProperty()
  subtype: string;
  @Prop()
  @ApiProperty()
  hobby: string;
  @Prop()
  @ApiProperty()
  birthday: string;
  @Prop()
  @ApiProperty()
  catchphrase: string;
  @Prop()
  @ApiProperty()
  favoriteSong: string;
  @Prop()
  @ApiProperty()
  favoriteSaying: string;
  @Prop()
  @ApiProperty()
  defaultClothing: number;
  @Prop()
  @ApiProperty()
  defaultUmbrella: string;
  @Prop()
  @ApiProperty()
  wallpaper: string;
  @Prop()
  @ApiProperty()
  flooring: string;
  @Prop()
  @ApiProperty()
  furnitureList: string;
  @Prop()
  @ApiProperty()
  furnitureNameList: string;
  @Prop()
  @ApiProperty()
  nameColor: string;
  @Prop()
  @ApiProperty()
  bubbleColor: string;
  @Prop()
  @ApiProperty()
  filename: string;
  @Prop()
  @ApiProperty()
  uniqueEntryId: string;
  @Prop()
  @ApiProperty()
  colors: Array<string>;
  @Prop()
  @ApiProperty()
  styles: Array<string>;
}

export const VillagerSchema = SchemaFactory.createForClass(Villager);
