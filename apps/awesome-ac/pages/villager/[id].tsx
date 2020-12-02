import fetch from 'isomorphic-unfetch';
import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import { VillagerFullView } from '../../components/VillagerFullView';
import { Villager, VillagerExtra } from '../../types/villagers';
import villagers from '../../acnhapi/v1a/villagers.json';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: villagers.map((villager) => `/villager/${villager.id}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://acnhapi.com/v1a/villagers/${params?.id}`
  );
  const villager: Villager = await response.json();
  const villagerExtraResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URI}/villagers/filter/?name=${villager.name['name-USen']}`
  );
  const villagerExtra = await villagerExtraResponse.json();
  return { props: { villager, villagerExtra } };
};

export default function VillagerPage({
  villager,
  villagerExtra,
}: {
  villager: Villager;
  villagerExtra: VillagerExtra[];
}) {
  return (
    <>
      <NextSeo
        openGraph={{
          title: villager.name['name-USen'],
          description: villager.saying,
          url: `https://ac-awesome-next.vercel.app/villager/${villager.id}`,
          type: 'profile',
          images: [
            {
              url: villager.image_uri,
              alt: villager.name['name-USen'],
              height: 256,
              width: 256,
            },
            {
              url: villagerExtra[0].photoImage,
              alt: villager.name['name-USen'],
              height: 256,
              width: 256,
            },
          ],
        }}
        title={`Awesome AC | ${villager.name['name-USen']}`}
      />
      <SocialProfileJsonLd
        type="Person"
        name={villager.name['name-USen']}
        url={`https://ac-awesome-next.vercel.app/villager/${villager.id}`}
        sameAs={[
          `https://animalcrossing.fandom.com/wiki/${villager.name['name-USen']}`,
        ]}
      />
      <VillagerFullView villager={villager} villagerExtra={villagerExtra[0]} />
    </>
  );
}
