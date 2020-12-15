import Image from 'next/image';
import Link from 'next/link';
import { Card, Label, List } from 'semantic-ui-react';
import { Item as ItemType } from '../types/item';
import { toUpperCase } from '../utility';

export const Item = ({ item }: { item: ItemType }) => (
  <Link href={`/item/${item._id}`}>
    <Card
      data-testid="villageritem"
      style={{ backgroundColor: '#F0EAD6' }}
      raised
    >
      <Card.Content>
        <Label
          color="teal"
          ribbon="right"
          content="Click to see more details"
        />
        <Card.Header>{toUpperCase(item.name)}</Card.Header>
        <Card.Meta> Birthday: {item.exchangePrice}</Card.Meta>
        <p style={{ color: 'black' }}>{item.tag}</p>
        <List relaxed>
          <List.Item>
            <List.Header>Catalog</List.Header>
            <List.Icon style={{ color: 'black' }} name="book" />
            <List.Content style={{ color: 'black' }}>
              {item.catalog}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Header>Customization Kit Cost</List.Header>
            <List.Icon style={{ color: 'black' }} name="money" />
            <List.Content style={{ color: 'black' }}>
              {item.customizationKitCost ? item.customizationKitCost : 0}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Header>DIY?</List.Header>
            <List.Content style={{ color: 'black' }}>
              {item.diy && toUpperCase(item.diy.toString())}
            </List.Content>
          </List.Item>
        </List>
      </Card.Content>
      <Card.Content extra>
        {item.variants.map(
          (variant) =>
            variant.image && (
              <img
                key={variant.uniqueEntryId}
                width={75}
                height={75}
                layout="fixed"
                src={variant.image}
              />
            )
        )}
      </Card.Content>
    </Card>
  </Link>
);
