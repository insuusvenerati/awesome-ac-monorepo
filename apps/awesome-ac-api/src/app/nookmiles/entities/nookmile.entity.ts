import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NookmileDocument = Nookmile & Document;

@Schema()
export class Nookmile {
  @Prop({ _id: true, type: String })
  _id: { $oid: string };
  @Prop()
  sourceSheet: string;
  @Prop()
  name: string;
  @Prop()
  image: string;
  @Prop()
  nookMiles: number;
  @Prop()
  stackSize?: string;
  @Prop()
  category?: string;
  @Prop()
  filename: string;
  @Prop()
  internalId: number;
  @Prop()
  uniqueEntryId: string;
}

export const NookmileSchema = SchemaFactory.createForClass(Nookmile);
