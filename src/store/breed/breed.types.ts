import { BreedListModel } from '../../shared/models/breed-list.model';

export const SET_BREED_LIST = 'SET_BREED_LIST';
export const GET_BREED_LIST = 'GET_BREED_LIST';
export const SET_BREED_IMAGE = 'SET_BREED_IMAGE';
export const GET_BREED_IMAGE = 'GET_BREED_IMAGE';

export interface BreedState {
  breedList: BreedListModel;
  breedImage: string;
}

export interface SetBreedListAction {
  type: typeof SET_BREED_LIST;
  payload: { data: BreedListModel };
}

export interface GetBreedListAction {
  type: typeof GET_BREED_LIST;
}

export interface SetBreedImageAction {
  type: typeof SET_BREED_IMAGE;
  payload: { data: string };
}

export interface GetBreedImageAction {
  type: typeof GET_BREED_IMAGE;
  payload: { data: string };
}

export type BreedActionTypes =
  | SetBreedListAction
  | GetBreedListAction
  | SetBreedImageAction
  | GetBreedImageAction;
