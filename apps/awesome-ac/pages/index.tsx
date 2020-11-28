import { NextSeo } from "next-seo";
import { useState } from "react";
import { Hit } from "react-instantsearch-core";
import { connectHits } from "react-instantsearch-dom";
import { Button, Card, Container, Grid, Icon, Segment, Sidebar } from "semantic-ui-react";
import { CustomNavbar } from "../components/Navbar";
import { CustomFilterList } from "../components/RefinementList";
import Villager from "../components/Villager";
import { Villager as VillagerType } from "../types/villagers";

const HitsView = ({ hits }: { hits: Hit<VillagerType>[] }) =>
  hits.map((hit) => <Villager key={hit.id} villager={hit} />);

const CustomHits = connectHits(HitsView as any);

export default function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <NextSeo title="Awesome AC | Villagers" />

      <CustomNavbar />
      <Container style={{ padding: 10 }} fluid>
        <Button style={{ marginBottom: 10 }} onClick={() => setVisible(!visible)}>
          <Icon name="filter" />
          Filter
        </Button>
        <Sidebar.Pushable>
          <Sidebar animation="push" direction="top" visible={visible}>
            <Segment>
              <Grid columns={4} stackable>
                <Grid.Column>
                  <CustomFilterList attribute="gender" />
                </Grid.Column>

                <Grid.Column>
                  <CustomFilterList attribute="personality" />
                </Grid.Column>

                <Grid.Column>
                  <CustomFilterList attribute="species" />
                </Grid.Column>

                <Grid.Column>
                  <CustomFilterList attribute="hobby" />
                </Grid.Column>
              </Grid>
            </Segment>
          </Sidebar>

          <Sidebar.Pusher>
            <Card.Group stackable style={{ marginTop: 10 }} itemsPerRow={5}>
              <CustomHits />
            </Card.Group>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Container>
    </>
  );
}
