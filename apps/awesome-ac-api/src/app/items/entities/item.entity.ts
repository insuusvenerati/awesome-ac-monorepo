import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber } from 'class-validator';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  // @Prop({ _id: true })
  // _id: { $oid: string };

  @Prop()
  id: string;

  @Prop()
  sourceSheet: string;
  @Prop()
  name: string;
  @Prop()
  patternTitle: string;
  @Prop()
  diy: boolean;
  @Prop()
  patternCustomize: boolean;
  @Prop()
  kitType: string;
  @Prop()
  size: string;
  @Prop()
  surface: boolean;
  @Prop()
  exchangePrice: number;
  @Prop()
  exchangeCurrency: string;
  @Prop()
  sourceNotes: string;
  @Prop()
  hhaBasePoints: number;
  @Prop()
  hhaCategory: string;
  @Prop()
  interact: string;
  @Prop()
  tag: string;
  @Prop()
  outdoor: boolean;
  @Prop()
  speakerType: string;
  @Prop()
  lightingType: string;
  @Prop()
  catalog: string;
  @Prop()
  versionAdded: string;
  @Prop()
  unlocked: boolean;
  @Prop()
  unlockNotes: string;
  @Prop()
  set: string;
  @Prop()
  series: string;
  @Prop()
  customizationKitCost: number;
  @Prop()
  variants: Array<Variant>;
}

class Variant {
  image: string;
  variation: string;
  filename: string;
  variantId: string;
  uniqueEntryId: string;
  colors: Array<string>;
  pattern: string;
  bodyCustomize: boolean;
  bodyTitle: string;
  source: Array<string>;
  @IsNumber()
  internalId: number;
  buy: number;
  sell: number;
  themes: Array<string>;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
