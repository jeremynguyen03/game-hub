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
      platforms: gameQuery.platform?.id
    }
  }, [gameQuery.genre?.id, gameQuery.platform?.id])
}

export default useGames;