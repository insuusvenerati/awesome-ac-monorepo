import { getNavItem, getVillagerCard } from '../support/app.po';

describe('awesome-ac', () => {
  beforeEach(() => cy.visit('/'));

  it('should render four nav items', () => {
    getNavItem().its('length').should('eq', 4);
  });

  it('should render 20 initial villagers', () => {
    getVillagerCard().its('length').should('eq', 20);
  });
});
