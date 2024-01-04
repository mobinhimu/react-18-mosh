import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

function GameCardContainer({ children }: { children: ReactNode }) {
  return (
    <Box borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
