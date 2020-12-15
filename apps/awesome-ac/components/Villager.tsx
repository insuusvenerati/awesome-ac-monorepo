import Link from 'next/link';
import { memo } from 'react';
import { Card, Label, List } from 'semantic-ui-react';
import { Villager } from '../types/villagers';

const VillagerItem = ({ villager }: { villager: Villager }) => (
  <Link href={`/villager/${villager.id}`}>
    <Card
      style={{ backgroundColor: '#F0EAD6' }}
      raised
      href={`/villager/${villager.id}`}
    >
      <img alt="villager" width={360} height={360} src={villager.image_uri} />

      <Card.Content>
        <Card.Header>{villager.name['name-USen']}</Card.Header>
        <Card.Meta> Birthday: {villager.birthday}</Card.Meta>
        <p style={{ color: 'black' }}>{villager.saying}</p>
        <List relaxed>
          <List.Item>
            <List.Icon style={{ color: 'black' }} name="chat" />
            <List.Content style={{ color: 'black' }}>
              {villager['catch-phrase']}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon style={{ color: 'black' }} name="tree" />
            <List.Content style={{ color: 'black' }}>
              {villager.hobby}
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon style={{ color: 'black' }} name="heart" />
            <List.Content style={{ color: 'black' }}>
              {villager.personality}
            </List.Content>
          </List.Item>
          <List.Item>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: `${villager['bubble-color']}`,
                }}
              />
              <div
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: `${villager['text-color']}`,
                }}
              />
            </div>
          </List.Item>
        </List>
      </Card.Content>
      <Card.Content extra>
        <Label color="blue">{villager.species}</Label>
        <Label color="green">{villager.gender}</Label>
        <Label color="red">{villager.personality}</Label>
      </Card.Content>
    </Card>
  </Link>
);

export default memo(VillagerItem);
