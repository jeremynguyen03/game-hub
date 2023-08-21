import useData from "./useData";
import {Platform} from "./usePlatforms";
import {GameQuery} from "../App";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>('/games', {
    params: {
      genre: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    }
  }, [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder, gameQuery.searchText])
}

export default useGames;