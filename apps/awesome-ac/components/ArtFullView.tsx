import { Card, Container } from 'semantic-ui-react';
import { Art } from '../types/art';

export const ArtFullView = ({ art }: { art: Art }) => (
  <Container>
    <Card fluid>
      <img width={360} height={360} alt="art full view" src={art.image_uri} />
      <Card.Content>
        <Card.Header>{art.name['name-USen']}</Card.Header>
      </Card.Content>
    </Card>
  </Container>
);
