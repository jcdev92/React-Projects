import { create } from "zustand";
import { persist } from "zustand/middleware";

type favoriteRepoState = {
  favoirteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

export const useFavoriteReposStore = create(
  persist<favoriteRepoState>(
    (set) => ({
      favoirteReposIds: [],
      addFavoriteRepo: (id: number) => {
        set((state) => ({
          favoirteReposIds: [...state.favoirteReposIds, id],
        }));
      },
      removeFavoriteRepo: (id: number) => {
        set((state) => ({
          favoirteReposIds: state.favoirteReposIds.filter(
            (repoId) => repoId !== id
          ),
        }));
      },
    }),
    {
      name: "favoriteRepos",
    }
  )
);
