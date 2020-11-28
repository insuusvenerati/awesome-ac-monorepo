import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AchievementDocument = Achievement & Document;

@Schema()
export class Achievement {
  @Prop({ _id: true })
  _id: { $oid: string };
  @Prop()
  sourceSheet: string;
  @Prop()
  name: string;
  @Prop()
  achievementDescription: string;
  @Prop()
  achievementCriteria: string;
  @Prop()
  num: number;
  @Prop()
  internalId: number;
  @Prop()
  internalName: string;
  @Prop()
  internalCategory: string;
  @Prop()
  numOfTiers: number;
  @Prop()
  tier1: number;
  @Prop()
  tier2: number;
  @Prop()
  tier3: number;
  @Prop()
  tier4: number;
  @Prop()
  tier5: number;
  @Prop()
  tier6: number;
  @Prop()
  tier1Reward: number;
  @Prop()
  tier2Reward: number;
  @Prop()
  tier3Reward: number;
  @Prop()
  tier4Reward: number;
  @Prop()
  tier5Reward: number;
  @Prop()
  tier6Reward: number;
  @Prop()
  tier1Modifier: string;
  @Prop()
  tier1Noun: string;
  @Prop()
  tier2Modifier: string;
  @Prop()
  tier2Noun: string;
  @Prop()
  tier3Modifier: string;
  @Prop()
  tier3Noun: string;
  @Prop()
  tier4Modifier: string;
  @Prop()
  tier4Noun: string;
  @Prop()
  tier5Modifier: string;
  @Prop()
  tier5Noun: string;
  @Prop()
  tier6Modifier: string;
  @Prop()
  tier6Noun: string;
  @Prop()
  sequential: boolean;
  @Prop()
  versionAdded: string;
  @Prop()
  uniqueEntryId: string;
}

export const AchievementSchema = SchemaFactory.createForClass(Achievement);
