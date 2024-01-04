import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGameGrid";
import GameCardIcon from "./GameCardIcon";
import MetacriticBadge from "./MetacriticBadge";
import { optimizedImage } from "../helper/image-optimization";
import Emoji from "./Emoji";

function GameCard({
  name,
  background_image,
  parent_platforms,
  metacritic,
  rating_top,
}: Game) {
  return (
    <Card>
      <Image src={optimizedImage(background_image)} alt={background_image} />
      <CardBody>
        <Heading width={100} size={"md"}>
          {name}
        </Heading>
        <Emoji rating={rating_top} />

        <HStack justifyContent={"space-between"} mt={"8px"}>
          <Box>
            {parent_platforms.map(({ platform }) => (
              <GameCardIcon key={platform.id} {...platform} />
            ))}
          </Box>
          <MetacriticBadge metacritic={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
