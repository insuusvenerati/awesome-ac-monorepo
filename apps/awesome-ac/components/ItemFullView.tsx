import Image from 'next/image';
import { Card, Container, Grid, List } from 'semantic-ui-react';
import { Item } from '../types/item';
import { toUpperCase } from '../utility';
import { CustomNavbar } from './Navbar';

export const ItemFullView = ({ item }: { item: Item }) => {
  return (
    <>
      <CustomNavbar hasSearch={false} />
      <Container>
        <Grid stackable columns={4}>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>{toUpperCase(item.name)}</Card.Header>
              </Card.Content>
              <Image
                layout="fixed"
                width={128}
                height={128}
                src={item.variants[0].image}
              />
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>All Details</Card.Header>
                <List>
                  <List.Item>
                    <List.Header content="ID" />
                    <List.Content content={item.id} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Tag" />
                    <List.Content content={item.tag} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Catalog" />
                    <List.Content content={item.catalog} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Outdoor" />
                    <List.Content content={item.outdoor} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Customization Kit Cost" />
                    <List.Content content={item.customizationKitCost} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Exchange Price" />
                    <List.Content content={item.exchangePrice} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Exchange Currency" />
                    <List.Content content={item.exchangeCurrency} />
                  </List.Item>
                  <List.Item>
                    <List.Header content="Size" />
                    <List.Content content={item.size} />
                  </List.Item>
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Images</Card.Header>
                {item.variants.map((variant) => (
                  <a key={variant.uniqueEntryId} href={variant.image}>
                    <Image
                      layout="fixed"
                      src={variant.image}
                      width={75}
                      height={75}
                    />
                  </a>
                ))}
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Links and More Information</Card.Header>
                <List>
                  {/* <List.Item>
                    <List.Header>
                      <a
                        target="blank"
                        href={`https://nookipedia.com/wiki/${item.name["name-USen"]}`}
                      >
                        Nookipedia
                      </a>
                    </List.Header>
                  </List.Item> */}
                </List>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};
