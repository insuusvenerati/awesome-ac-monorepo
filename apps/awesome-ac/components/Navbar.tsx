import Link from 'next/link';
import { connectSearchBox } from 'react-instantsearch-dom';
import { Dropdown, Input, Menu } from 'semantic-ui-react';

const items = [
  {
    name: 'Villagers',
    url: '/',
  },
  {
    name: 'Art',
    url: '/art',
  },
  // {
  //   name: 'Music',
  //   url: '/music',
  // },
  {
    name: 'Sea',
    url: '/sea',
  },
  // {
  //   name: 'Fossils',
  //   url: '/fossils',
  // },
  {
    name: 'Fish',
    url: '/fish',
  },
  // {
  //   name: 'Bugs',
  //   url: '/bugs',
  // },
  {
    name: 'Items',
    url: '/items',
  },
];

const SearchBox = ({ currentRefinement, refine }: any) => (
  <Input
    value={currentRefinement}
    onChange={(event) => refine(event.currentTarget.value)}
    placeholder="Search"
    style={{ width: 500 }}
  />
);

const CustomSearch = connectSearchBox(SearchBox);

export const CustomNavbar = ({ hasSearch = true }) => {
  return (
    <Menu data-testid="nav" stackable>
      <Menu.Item data-testid="navitem">
        <Link href="/">
          <a style={{ color: 'black' }}>
            <h1>Awesome AC</h1>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item data-testid="navitem">
        <h4>Animal Crossing database with filters and search!</h4>
      </Menu.Item>

      {hasSearch && (
        <Menu.Item data-testid="navitem">
          <CustomSearch />
        </Menu.Item>
      )}
      <Menu.Item position="right" data-testid="navitem">
        <Dropdown pointing text="Where to?">
          <Dropdown.Menu>
            {items.map((item) => (
              <Link key={item.name} href={item.url}>
                <Dropdown.Item>
                  <a>{item.name}</a>
                </Dropdown.Item>
              </Link>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
};
