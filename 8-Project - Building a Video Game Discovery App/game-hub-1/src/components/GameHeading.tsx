import { Heading } from "@chakra-ui/react";
import { type GameQuery } from "../App";

function GameHeading({ gameQuery }: { gameQuery: GameQuery }) {
  const heading =
    `${gameQuery?.genreObj?.name || "Games"} ${
      gameQuery?.platformObj?.name || ""
    }` || "Games";

  return (
    <Heading as={"h2"} mb={4}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
