import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import { GameQuery } from "../App";

export interface SortingOrder {
  value: string;
  label: string;
}

interface GameSortingProps {
  onSorting: (sorting: SortingOrder) => void;
  gameQuery: GameQuery;
}

function GameSorting({ gameQuery: { sorting }, onSorting }: GameSortingProps) {
  const sortingOrder: SortingOrder[] = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "added",
      label: "Date Added",
    },
    {
      value: "-released",
      label: "Release Date",
    },
    {
      value: "-rating",
      label: "Avg Rating",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
  ];

  const selectedOrder = sortingOrder.find(
    (sorOrd) => sorOrd.value === sorting?.value
  )?.label;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Sort By : {selectedOrder ? selectedOrder : "Relevance"}
      </MenuButton>

      <MenuList>
        {sortingOrder.map((sort) => (
          <MenuItem
            key={sort.value}
            value={sort.value}
            onClick={() => onSorting(sort)}
          >
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default GameSorting;
