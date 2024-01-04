import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";
import { type GameQuery } from "../App";
import { type Platform } from "../hooks/useGameGrid";

interface PlatformSelectorProps {
  onPlatform: (platform: Platform) => void;
  gameQuery: GameQuery;
}

function PlatformSelector({
  onPlatform,
  gameQuery: { platformObj },
}: PlatformSelectorProps) {
  const { data: platform } = usePlatform();

  const platformName = platform?.find(
    (pla) => pla.id === platformObj?.id
  )?.name;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {platformName ? platformName : "Platform"}
      </MenuButton>
      <MenuList>
        {platform.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
