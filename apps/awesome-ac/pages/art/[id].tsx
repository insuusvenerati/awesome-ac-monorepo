import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import art from '../../v1a/art.json';
import { ArtFullView } from '../../components/ArtFullView';
import { Art } from '../../types/art';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: art.map((item) => `/art/${item.id}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`https://acnhapi.com/v1a/art/${params?.id}`);
  const art = await response.json();
  return { props: { art } };
};

const ArtItemPage = ({ art }: { art: Art }) => {
  return (
    <>
      <NextSeo
        openGraph={{
          title: art.name['name-USen'],
          description: art['museum-desc'],
          images: [
            {
              url: art.image_uri,
              alt: art.name['name-USen'],
              width: 128,
              height: 128,
            },
          ],
        }}
        title={`Awesome AC | ${art.name['name-USen']}`}
      />
      <ArtFullView art={art} />
    </>
  );
};

export default ArtItemPage;
