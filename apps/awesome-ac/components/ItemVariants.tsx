import { Variant } from '../types/item';
import { ItemVariant } from './ItemVariant';

export const ItemVariants = ({ variants }: { variants: Variant[] }) => (
  <>
    {variants.map((variant) => (
      <ItemVariant key={variant.uniqueEntryId} variant={variant} />
    ))}
  </>
);
