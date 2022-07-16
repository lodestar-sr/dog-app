import {
  GET_BREED_IMAGE,
  GET_BREED_LIST,
  GetBreedImageAction,
  GetBreedListAction,
  SET_BREED_IMAGE,
  SET_BREED_LIST,
  SetBreedImageAction,
  SetBreedListAction,
} from './breed.types';
import { BreedListModel } from '../../shared/models/breed-list.model';

export const setBreedListAction = (
  data: BreedListModel
): SetBreedListAction => ({
  type: SET_BREED_LIST,
  payload: { data },
});

export const getBreedListAction = (): GetBreedListAction => ({
  type: GET_BREED_LIST,
});

export const setBreedImageAction = (data: string): SetBreedImageAction => ({
  type: SET_BREED_IMAGE,
  payload: { data },
});

export const getBreedImageAction = (data: string): GetBreedImageAction => ({
  type: GET_BREED_IMAGE,
  payload: { data },
});
