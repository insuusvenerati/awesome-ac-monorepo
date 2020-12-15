import Image from 'next/image';
import { Card, Grid, List } from 'semantic-ui-react';
import { Variant } from '../types/item';

export const ItemVariant = ({ variant }: { variant: Variant }) => {
  return (
    <Grid.Column>
      <Card>
        <Card.Content>
          <Card.Header>
            <img layout="fixed" width={128} height={128} src={variant.image} />
          </Card.Header>
          <Card.Header>Colors</Card.Header>
          <List>
            {variant.colors.map((color, index) => (
              <List.Item key={index}>
                <List.Content>
                  <List.Header>{color}</List.Header>
                  <div
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: color,
                      borderRadius: 5,
                    }}
                  />
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};
