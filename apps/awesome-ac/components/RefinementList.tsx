import { connectRefinementList, MenuProvided } from "react-instantsearch-core";
import { Checkbox, List } from "semantic-ui-react";

export const FilterList = ({ items, currentRefinement, refine }: MenuProvided) => {
  return (
    <List>
      {items.map((item) => (
        <List.Item key={item.value}>
          <Checkbox
            value={item.isRefined ? currentRefinement : ""}
            onChange={() => {
              refine(item.value);
            }}
            checked={item.isRefined}
            label={`${item.label} ${item.count}`}
          />
        </List.Item>
      ))}
    </List>
  );
};

export const CustomFilterList = connectRefinementList(FilterList as any);
