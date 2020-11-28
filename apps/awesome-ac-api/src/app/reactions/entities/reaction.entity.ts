import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReactionDocument = Reaction & Document;

@Schema()
export class Reaction {
  @Prop({ _id: true, type: String })
  _id: { $oid: string };
  @Prop()
  sourceSheet: string;
  @Prop()
  name: string;
  @Prop()
  image: string;
  @Prop()
  source: Array<string>;
  @Prop()
  sourceNotes: string | null;
  @Prop()
  versionAdded: string;
  @Prop()
  iconFilename: string;
  @Prop()
  uniqueEntryId: string;
}

export const ReactionSchema = SchemaFactory.createForClass(Reaction);
