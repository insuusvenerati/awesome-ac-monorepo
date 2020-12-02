export interface Item {
  _id: string;
  id: string;
  sourceSheet: string;
  name: string;
  patternTitle: string;
  diy: boolean;
  patternCustomize: boolean;
  kitType: string;
  size: string;
  surface: boolean;
  exchangePrice: number;
  exchangeCurrency: number;
  sourceNotes: string;
  hhaBasePoints: number;
  hhaCategory: string;
  interact: string;
  tag: string;
  outdoor: boolean;
  speakerType: string;
  lightingType: string;
  catalog: string;
  versionAdded: string;
  unlocked: boolean;
  unlockNotes: string;
  set: string;
  series: string;
  customizationKitCost: number | null;
  variants: Array<Variant>;
}

export interface Variant {
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
  internalId: number;
  buy: number;
  sell: number;
  themes: Array<string>;
}
