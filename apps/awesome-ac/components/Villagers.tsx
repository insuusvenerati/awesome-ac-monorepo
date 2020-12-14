/* eslint-disable react/jsx-no-useless-fragment */
import * as React from 'react';
import { Villager } from '../types/villagers';
import VillagerItem from './Villager';

export const Villagers = ({ villagers }: { villagers: Villager[] }) => {
  return (
    <React.Fragment>
      {villagers &&
        villagers.map((villager) => (
          <VillagerItem key={villager.id} villager={villager} />
        ))}
    </React.Fragment>
  );
};
