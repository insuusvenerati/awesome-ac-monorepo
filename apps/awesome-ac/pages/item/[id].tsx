import { GetServerSideProps } from 'next';
import { Grid } from 'semantic-ui-react';
import { ItemFullView } from '../../components/ItemFullView';
import { ItemVariants } from '../../components/ItemVariants';
import { Item } from '../../types/item';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(
    `http://localhost:1337/items/filter?id=${params.id}`
  );
  const item = await response.json();
  return {
    props: { item },
  };
};

export default function ItemPage({ item }: { item: Item }) {
  return (
    <>
      <ItemFullView item={item} />

      <Grid stackable container columns={3}>
        <ItemVariants variants={item.variants} />
      </Grid>
    </>
  );
}
