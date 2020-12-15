import Link from 'next/link';
import React from 'react';
import { Card } from 'semantic-ui-react';
import { Art } from '../types/art';
import { toUpperCase } from '../utility';

export const ArtItem = ({ art }: { art: Art }) => (
  <Link href={`/art/${art.id}`}>
    <Card style={{ backgroundColor: '#F0EAD6' }} raised href={`/art/${art.id}`}>
      <img alt="art item" width={200} height={200} src={art.image_uri} />

      <Card.Content>
        <Card.Header>{toUpperCase(art.name['name-USen'])}</Card.Header>
        <Card.Meta> Buy Price: ${art['buy-price']}</Card.Meta>
        <Card.Meta> Sell Price: ${art['sell-price']}</Card.Meta>
        <Card.Description>{art['museum-desc']}</Card.Description>
      </Card.Content>
    </Card>
  </Link>
);
