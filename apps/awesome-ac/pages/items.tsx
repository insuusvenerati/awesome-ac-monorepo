import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { connectHits, Hit, InstantSearch } from 'react-instantsearch-core';
import {
  Button,
  Card,
  Container,
  Grid,
  Icon,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import { Item } from '../components/Item';
import { CustomNavbar } from '../components/Navbar';
import { CustomFilterList } from '../components/RefinementList';
import { searchClient } from '../searchClient';
import { Item as ItemType } from '../types/item';

const CustomHitsView = ({ hits }: { hits: Hit<ItemType>[] }) =>
  hits.map((hit) => <Item key={hit._id} item={hit} />);

const CustomHitsItems = connectHits(CustomHitsView as any);

export default function ItemsPage() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <NextSeo title="Awesome AC | Items" />
      <InstantSearch searchClient={searchClient} indexName="items">
        <CustomNavbar />
        <Container fluid>
          <Button
            style={{ marginBottom: 10 }}
            onClick={() => setVisible(!visible)}
          >
            <Icon name="filter" />
            Filter
          </Button>
          <Sidebar.Pushable>
            <Sidebar animation="push" direction="top" visible={visible}>
              <Segment>
                <Grid columns={3} stackable>
                  <Grid.Column>
                    <CustomFilterList limit={99} attribute="colors" />
                  </Grid.Column>

                  <Grid.Column>
                    <CustomFilterList attribute="themes" />
                  </Grid.Column>

                  <Grid.Column>
                    <CustomFilterList limit={99} attribute="tag" />
                  </Grid.Column>
                </Grid>
              </Segment>
            </Sidebar>

            <Sidebar.Pusher>
              <Card.Group stackable style={{ marginTop: 10 }} itemsPerRow={5}>
                <CustomHitsItems />
              </Card.Group>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Container>
      </InstantSearch>
    </>
  );
}
