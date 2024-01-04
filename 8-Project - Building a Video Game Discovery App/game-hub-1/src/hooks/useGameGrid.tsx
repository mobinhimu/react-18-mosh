import { GameQuery } from "../App";
import useFetched from "./useFetched";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGameGrid = ({
  genreObj,
  platformObj,
  sorting,
  searchGame,
}: GameQuery) => {
  const inputParams = {
    genres: genreObj?.id,
    platforms: platformObj?.id,
    ordering: sorting?.label,
    search: searchGame,
  };

  return useFetched<Game>(
    "/games",
    {
      params: inputParams,
    },
    [genreObj?.id, platformObj?.id, sorting?.label, searchGame]
  );
};

export default useGameGrid;
