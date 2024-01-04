import { HStack, Image } from "@chakra-ui/react";

import image from "../assets/logo.webp";
import ToggleDarkMode from "./ToggleDarkMode";
import SearchGame from "./SearchGame";

export interface NavBarProps {
  onSearchGame: (searchGame: string) => void;
}

function NavBar({ onSearchGame }: NavBarProps) {
  return (
    <HStack padding={"10px"}>
      <Image boxSize="60px" src={image} />
      <SearchGame onSearchGame={onSearchGame} />
      <ToggleDarkMode />
    </HStack>
  );
}

export default NavBar;
