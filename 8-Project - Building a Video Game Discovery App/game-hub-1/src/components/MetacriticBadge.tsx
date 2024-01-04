import { Badge } from "@chakra-ui/react";

function MetacriticBadge({ metacritic }: { metacritic: number }) {
  const metaCbadge =
    metacritic > 70 ? "green" : metacritic > 50 ? "yellow" : "";

  return (
    <Badge
      colorScheme={metaCbadge}
      fontSize={"0.8rem"}
      px="8px"
      borderRadius={"4px"}
    >
      {metacritic}
    </Badge>
  );
}

export default MetacriticBadge;
