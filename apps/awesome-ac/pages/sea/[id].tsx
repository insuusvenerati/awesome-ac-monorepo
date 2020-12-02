import { GetStaticPaths, GetStaticProps } from 'next';
import { Sea } from '../../types/sea';
import seaItems from '../../acnhapi/v1a/sea.json';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: seaItems.map((item) => `/sea/${item.id}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`https://acnhapi.com/v1a/sea/${params?.id}`);
  const seaItem: Sea = await response.json();
  return { props: { seaItem } };
};

export default function SeaItem({ seaItem }: { seaItem: Sea }) {
  return (
    <>
      <h1>Sea Item</h1>
      {JSON.stringify(seaItem, null, 2)}
    </>
  );
}
