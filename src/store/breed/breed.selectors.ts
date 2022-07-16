import { RootState } from '../reducers';

export const selectBreedList = (state: RootState): string[] =>
  Object.keys(state.breed.breedList).sort();

export const selectBreedImage = (state: RootState): string =>
  state.breed.breedImage;
