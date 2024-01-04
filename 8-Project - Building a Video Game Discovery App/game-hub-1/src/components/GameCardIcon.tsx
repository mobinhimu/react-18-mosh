import { Platform } from "../hooks/useGameGrid";

import { FaWindows, FaXbox, FaLinux, FaAndroid } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaPlaystation } from "react-icons/fa6";
import { SiNintendo } from "react-icons/si";
import { Icon } from "@chakra-ui/react";

function GameCardIcon({ slug }: Platform) {
  const icons = {
    pc: FaWindows,
    xbox: FaXbox,
    linux: FaLinux,
    playstation: FaPlaystation,
    mac: MdOutlinePhoneIphone,
    nintendo: SiNintendo,
    android: FaAndroid,
  };

  return (
    <Icon
      color={"gray.500"}
      mr={"10px"}
      as={icons[slug as keyof typeof icons]}
    />
  );
}

export default GameCardIcon;
